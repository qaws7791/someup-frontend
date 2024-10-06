/* eslint-disable no-void */
import {
  useMutation,
  useQueryClient,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import postQuerys from '@/lib/service/post/post-queries';
import {
  CreatePostRequest,
  CreatePostResponse,
  FetchPostsRequest,
  GetPostRequest,
  InsertMemoRequest,
  Post,
  UpdatePostBody,
} from '@/types/post-types';
import {
  fetchPost,
  updatePost,
  fetchPosts,
  createPost,
  deletePost,
  insertMemo,
  updateMemo,
} from '@/lib/service/post/post-service';
import { useRouter } from 'next/navigation';

export function useCreatePostMutation() {
  const router = useRouter();
  return useMutation<CreatePostResponse, Error, CreatePostRequest>({
    mutationFn: createPost,
    onSuccess: ({ postId }) => {
      router.push(`/result/${postId}`);
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: deletePost,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: postQuerys.list._def,
      });
    },
  });
}

export function usePostDetail(params: GetPostRequest) {
  return useSuspenseQuery<Post, Error>({
    queryKey: postQuerys.detail(params).queryKey,
    queryFn: () => fetchPost(params),
  });
}

export function useUpdatePostMutation() {
  return useMutation<void, Error, { id: string; body: UpdatePostBody }>({
    mutationFn: ({ id, body }) => updatePost(id, body),
  });
}

export function useInsertMemo() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, InsertMemoRequest>({
    mutationFn: insertMemo,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: postQuerys.detail._def,
      });
    },
  });
}

export function useUpdateMemo() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, InsertMemoRequest>({
    mutationFn: updateMemo,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: postQuerys.detail._def,
      });
    },
  });
}

export function usePosts(
  params: Pick<FetchPostsRequest, 'archiveId' | 'search'>,
) {
  return useSuspenseInfiniteQuery({
    queryKey: postQuerys.list(params).queryKey,
    queryFn: ({ pageParam = '1' }) =>
      fetchPosts({
        ...params,
        page: pageParam,
      }),
    initialPageParam: '1',
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.postList?.length === 0
        ? undefined
        : String(allPages.length + 1);
    },
  });
}
