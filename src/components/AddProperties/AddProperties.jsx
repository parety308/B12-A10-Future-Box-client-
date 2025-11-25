import { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
const AddProperties = () => {
  const { user } = use(AuthContext);

  const handleCreate = (e) => {
    e.preventDefault();

    const propertyName = e.target.propertyName.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price = parseFloat(e.target.price.value);
    const location = e.target.location.value;
    const propertyImage = e.target.image.value;

    const newProperty = {
      propertyName,
      description,
      category,
      price: Number(price),
      location,
      propertyImage,
      postedBy: {
        name: user.displayName,
        email: user.email,
        profilePhoto: user.photoURL
      },
      postedDate: new Date().toISOString()
    };

    console.log(newProperty);

    // TODO: send newProperty to your backend API
    fetch('http://localhost:3000/items',
      {
        method: 'POST',
        body: JSON.stringify(newProperty),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        console.log('Success:', data);
      });

    e.target.reset();
  };

  return (
    <div className="hero bg-base-200 my-6">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold text-center text-[#001931]">
          Add <span className='text-[#632EE3]'>A Property</span>
        </h1>
        <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-6">
          <form onSubmit={handleCreate} className="space-y-4">
            <label className="label text-[#001931]">Property Name</label>
            <input type="text" name="propertyName" placeholder="Property Name" className="input w-full" required />

            <label className="label text-[#001931]">Description</label>
            <textarea name="description" placeholder="Property Description" className="input w-full h-24" required />

            <label className="label text-[#001931]">Category</label>
            <select name="category" className="input w-full" required>
              <option value="">Select Category</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>

            <label className="label text-[#001931]">Price</label>
            <input type="number" name="price" placeholder="Property Price" className="input w-full" required />

            <label className="label text-[#001931]">Location</label>
            <input type="text" name="location" placeholder="City, Area, or Address" className="input w-full" required />

            <label className="label text-[#001931]">Image Link</label>
            <input type="text" name="image" placeholder="Property Image URL" className="input w-full" required />

            <label className="label text-[#001931]">Your Email</label>
            <input type="text" value={user?.email} className="input w-full" readOnly />

            <label className="label text-[#001931]">Your Name</label>
            <input type="text" value={user?.displayName} className="input w-full" readOnly />

            <button type="submit" className="btn mt-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white w-full">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperties;
