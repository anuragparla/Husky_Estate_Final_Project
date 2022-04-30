import React from "react";
import HomeCard from "../HomeCard";





const HomeGrid = ({ properties, isAdmin }) => {

    const PropertyAreas = () => {
        return (
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
            {getColumnsForRow()}
          </div>
        );
      }
      const EmptyArea = () => {
        return (
          <div class="text-center">
            <img
              src="https://www.hyperui.dev/photos/confused-travolta.gif"
              alt="John Travolta confused"
              class="object-cover w-128 h-64 rounded-lg mx-auto"
            />
    
            <p class="mt-6 text-gray-500">We can't find anything, try searching again.</p>
          </div>
        );
      }
    
      const getColumnsForRow = () => {
        let items = properties.map((home, index) => {
          return (
            <HomeCard home={home} index={index} isAdmin={isAdmin} key={index}></HomeCard>
          );
        });
        return items;
      };
      
      console.log("Created");
    return (
        <div>
            {properties.length === 0 ? <EmptyArea></EmptyArea> : <PropertyAreas></PropertyAreas>}
        </div>

    );
}


export default HomeGrid;