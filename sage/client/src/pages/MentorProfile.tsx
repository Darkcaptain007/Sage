// import React from "react";
import { bgprofile } from "../assets/pictures";
import { bgImage } from "../assets/pictures";

const MentorProfilePage = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Header */}
      <div className="bg-gray-800 w-full text-white flex items-center justify-between px-4 py-3">
        <div className="text-sm">Kavya Anand</div>
      </div>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-2/3 mt-6 overflow-hidden">
        <div
          className="relative"
          style={{ backgroundImage: `url(${bgprofile})` }}
        >
          <img
            className="w-full h-56 object-cover"
            src="https://ik.imagekit.io/anupb4txx3/WhatsApp%20Image%202024-08-24%20at%2022.17.18.jpeg?updatedAt=1724518766760" // Replace with actual image link
            alt="Profile background"
          />
          <img
            className="w-24 h-24 rounded-full border-4 border-white absolute top-36 left-8"
            src="https://via.placeholder.com/150" // Replace with actual profile image
            alt="Profile"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Kavya Anand</h2>
              <p className="text-gray-500">Amazon (Developer)</p>
              <p className="text-gray-700 font-semibold">Mathematics</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">$5/hour</p>
              <p className="text-gray-500">Experience: 5 years</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <p className="text-gray-700 mt-2">
              An online mathematics mentor is an experienced and knowledgeable
              educator who specializes in guiding students through the
              complexities of mathematics. With a deep passion for the subject,
              this mentor offers personalized instruction tailored to each
              student's learning pace and style. Utilizing interactive tools,
              video lessons, and real-time problem-solving sessions, the mentor
              ensures that concepts are clearly understood and applied
              effectively.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center">
              <span>Resume</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Appointments Section */}
      <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-2/3 mt-6 p-6">
        <h3 className="text-xl font-semibold mb-4">Appointments</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="text-gray-700">Mentee name 1</div>
            <div className="flex space-x-4">
              <div className="text-gray-500">24/08/2024</div>
              <div className="text-gray-500">03:00pm</div>
              <div className="text-gray-500">1 hour</div>
              <button className="text-blue-500 font-semibold">Join</button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="text-gray-700">Mentee name 2</div>
            <div className="flex space-x-4">
              <div className="text-gray-500">06/09/2024</div>
              <div className="text-gray-500">06:00pm</div>
              <div className="text-gray-500">0.5 hour</div>
              <button className="text-blue-500 font-semibold">Join</button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="text-gray-700">Mentee name 3</div>
            <div className="flex space-x-4">
              <div className="text-gray-500">12/10/2024</div>
              <div className="text-gray-500">10:00am</div>
              <div className="text-gray-500">2 hours</div>
              <button className="text-blue-500 font-semibold">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;
