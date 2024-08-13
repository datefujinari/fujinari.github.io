import Layout from '../components/Layout';

// 仮のデータ
const posts = [
  {
    id: 1,
    title: 'ブログポストのタイトル1',
    thumbnail: '/path/to/thumbnail1.jpg',
    excerpt: 'これはブログポストの概要です...',
  },
  {
    id: 2,
    title: 'ブログポストのタイトル2',
    thumbnail: '/path/to/thumbnail2.jpg',
    excerpt: 'これはブログポストの概要です...',
  },
  // 他のポスト...
];

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-black mt-6 mb-4">ブログ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow">
              <img src={post.thumbnail} alt={`Thumbnail for ${post.title}`} className="w-full h-48 object-cover rounded"/>
              <h2 className="mt-2 text-xl font-semibold text-black">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
