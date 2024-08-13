import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const pageSize = 5;  // 1ページあたりのポスト数
  const pageCount = Math.ceil(allPosts.length / pageSize);

  // 例えば、1ページ目のデータを取得
  const posts = allPosts.slice(0, pageSize);

  return {
    props: {
      posts,
      pageCount
    }
  };
}
