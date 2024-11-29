import { Link, useLoaderData } from "react-router-dom";
import bgImg from "../assets/more/11.png"
import Swal from 'sweetalert2'


const UpdateCoffee = () => {
    const updatedCoffee = useLoaderData()
    const { name,
        price,
        origin,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
        quantity,_id} = updatedCoffee


    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const updateCoffee = {
            name,
            price,
            origin,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
            quantity,
          }
        console.log(updateCoffee);
    
    fetch(`https://coffee-house-server-zeta.vercel.app/coffee/${_id}`,{
        method: "PUT",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(updateCoffee)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: "Coffee Updated",
                text: `${name} Coffee Updated Successfully`,
                icon: "success"
              });
        }
    })
    
    
    
    
        form.reset();
      };
    return (
        <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url(${bgImg})`, // Replace with your actual image path
        }}
      >
        <div className="mt-8">
          {/* Back to Home */}
          <Link
            to={"/"}
            className="text-2xl font-rancho text-primary hover:text-black font-medium"
          >
            &larr; Back to home
          </Link>
          <div className="w-full max-w-3xl px-6 py-8 mt-8 bg-[rgb(244,243,240)] rounded-lg shadow-lg relative">
            <h2 className="text-3xl font-rancho font-bold text-primary text-center mb-4">
            Update Existing Coffee Details
            </h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleUpdateCoffee} className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Existing Fields */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input defaultValue={name} type="text" name="name" placeholder="Enter coffee name" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Chef</label>
        <input defaultValue={chef} type="text" name="chef" placeholder="Enter coffee chef" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Supplier</label>
        <input defaultValue={supplier} type="text" name="supplier" placeholder="Enter coffee supplier" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-700">Price</label>
      <input defaultValue={price} type="number" name="price" placeholder="Enter coffee price" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" step="0.01" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Origin</label>
      <input defaultValue={ origin} type="text" name="origin" placeholder="Enter coffee origin" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
    </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Taste</label>
        <input defaultValue={taste} type="text" name="taste" placeholder="Enter coffee taste" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input defaultValue={category} type="text" name="category" placeholder="Enter coffee category" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input defaultValue={quantity} type="number" name="quantity" placeholder="Enter coffee quantity" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
      </div>
    </div>
  
   
    {/* Photo and Details */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Photo</label>
      <input defaultValue={photo} type="text" name="photo" placeholder="Enter photo URL" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Details</label>
      <textarea defaultValue={details} name="details" placeholder="Enter coffee details" className="w-full rounded border-text-primary bg-white py-2 px-4 focus:outline-text-primary focus:border-text-primary" rows="4"></textarea>
    </div>
    <button type="submit" className="mt-6 w-full bg-[rgb(210,180,140)] hover:bg-[rgb(175,140,110)] py-2 px-4 rounded-md transition text-2xl font-rancho font-bold text-primary text-center">Update Coffee Details</button>
  </form>
  
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffee;