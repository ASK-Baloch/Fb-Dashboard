export default function PostHistory({ posts }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Content</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(post.created_time).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 max-w-xs truncate">{post.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  