// components/CoursesSection.tsx
import React from "react";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: 1,
    title: "Property Investment Strategies",
    description:
      "Discover how to identify profitable investment opportunities and maximize returns.",
    icon: "/1.png",
  },
  {
    id: 2,
    title: "Property Management Essentials",
    description:
      "Learn how to efficiently manage properties, handle tenants, and maintain compliance.",
    icon: "/2.png",
  },
  {
    id: 3,
    title: "Real Estate Law",
    description:
      "Understand the legal processes and contracts that govern property transactions and ownership.",
    icon: "/3.png",
  },
  {
    id: 4,
    title: "Real Estate Marketing & Sales",
    description:
      "Master the art of marketing properties and closing deals with top sales techniques.",
    icon: "/4.png",
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className='py-10 md:py-16 bg-white'>
      <div className='container mx-auto px-4 md:px-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-black text-center mb-6'>
          Master Real Estate Courses on Diverse Property Subjects
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
