import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imageUpload } from "../../api/Utlis/util";
import { useState } from "react";
import Loading from "../../shard/Loading";

const Comment = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Submitted Comment:", data);
    const imageURL = await imageUpload(data.photo?.[0]);
    console.log(imageURL);

    const commentUserData = {
      name: data.name,
      email: data.email,
      title: data.title,
      description: data.description,
      image: imageURL,
    };

    try {
      // Send to backend
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/comment`,
        commentUserData
      );

      if (res.data.acknowledged) {
        toast.success("Comment added successfully!");
      } else {
        toast.error("Something went wrong.");
      }

      console.log(commentUserData);
      // reset(); 
    } catch (error) {
      toast.error("Failed to submit comment.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md lg:mx-auto my-24 mx-4 p-6 rounded-lg shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a Comment</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Photo Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Photo</label>
          <input
            type="file"
            accept="image/*"
            {...register("photo", { required: "Photo is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.photo && (
            <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
          )}
        </div>

        {/* Title Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            placeholder="Enter description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? <p> loading...</p>: "Post Comment"} 
        </button>
      </form>
    </div>
  );
};

export default Comment;
