"use client";
// import { useBlogs } from "@/hook/paginationBlogs";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const perPage = 10;
  // const { data, error, isLoading } = useBlogs(page, perPage);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading blogs</div>;

  return (
    <div className="m-10 rounded-md">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-xl uppercase">Title</th>
              <th className="text-xl uppercase">Content</th>
            </tr>
          </thead>
          <tbody>
               {/* pagination Data */}
       
          </tbody>
        </table>
      </div>

    
      <div>
          {/* pagination Button */}

    
      </div>
    </div>
  );
}
