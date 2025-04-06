'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import GroupCard from "@/components/GroupCard";
import PostHistory from "@/components/PostHistory";

export default function DashboardPage() {
  const { data: session } = useSession();
  const [groups, setGroups] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const res = await fetch("/api/facebook/groups");
      const data = await res.json();
      setGroups(data.data);
    };

    const fetchPosts = async () => {
      const res = await fetch("/api/facebook/posts");
      const data = await res.json();
      setPosts(data);
    };

    if (session) {
      fetchGroups();
      fetchPosts();
    }
  }, [session]);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Facebook Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Posting History</h2>
        <PostHistory posts={posts} />
      </div>
    </div>
  );
}
