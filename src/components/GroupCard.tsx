export default function GroupCard({ group }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <img 
            src={group.icon} 
            alt={group.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{group.name}</h3>
            <p className="text-sm text-gray-500">
              {group.member_count.toLocaleString()} members
            </p>
          </div>
        </div>
      </div>
    );
  }
  