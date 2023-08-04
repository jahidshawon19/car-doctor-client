import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../context/AuthContext";


const Checkout = () => {
    const service = useLoaderData()

    const {user} = useContext(authContext)

    const handleOrderSubmit = (e)=>{
        e.preventDefault();
        
        const customerName = e.target.name.value;
        const email = e.target.email.value;
        const serviceName = e.target.service.value; 
        const date = e.target.date.value; 
        const price = e.target.price.value;

        const order = {
            customerName,
            email,
            serviceName,
            service_id: service._id,
            date,
            price,
            img:service.img

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Booking Done')
            }
        })
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">

                <form onSubmit={handleOrderSubmit}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{service.title}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">


                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} className="input input-bordered" name="email" />
                            </div>


                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service</span>
                            </label>
                            <input type="text" defaultValue={service.title} className="input input-bordered" name="service" />

                            </div>


                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date"  className="input input-bordered" />

                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={service.price}  name="price" className="input input-bordered" />

                            </div>


                            <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Confirm Order</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </form>
</div>
        </div>
    );
};

export default Checkout;