import MapView from '@/components/school/map-view';
import SchoolSidebar from '@/components/school/school-sidebar';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        {/* <SearchBar /> */}
        <div className="grid grid-cols-7">
          <div className="col-span-4 p-6 h-screen">
            <MapView />
          </div>
          <div className="  col-span-3">
            <SchoolSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page