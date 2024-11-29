import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisplayCoffee = ({ coffee, coffees,setCoffees }) => {
  const { name, price, chef, photo, _id } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-house-server-zeta.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remainingCoffees = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] shadow-lg rounded-lg flex items-center space-x-6 p-6 lg:p-16">
      {/* Coffee Image */}
      <div className="w-28 h-28">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Coffee Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-brown-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-bold">Chef:</span> {chef}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-bold">Price:</span> {price} Taka
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2">
        <Link to={`/coffeeDetails/${_id}`}>
        <button className="p-2 bg-[#D2B48C] text-white rounded hover:bg-[#C19A74]">
          <FaEye />
        </button>
        </Link>
        <Link to={`updateCoffee/${_id}`}>
          <button className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600">
            <FaEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

// Prop validation
DisplayCoffee.propTypes = {
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    chef: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired,
};

export default DisplayCoffee;
