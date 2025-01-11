import React, { useState ,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { BOOK_PACKAGE } from "../graphql/mutation"; // Import the GraphQL mutation
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);

 useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted
  }, []);
  const [bookPackage] = useMutation(BOOK_PACKAGE);

  const [formData, setFormData] = useState({
    name: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    date: new Date().toISOString().split("T")[0],
  });

  const additionalCharges = 200; 
  const totalPrice = state.packageDetails.price + additionalCharges;
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };
  const handlePayLater = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions to proceed.", toastOptions);
      return;
    }
    const userId = localStorage.getItem("user-id");
    if (!userId) {
      toast.error("You must be logged in to confirm booking.", toastOptions);
      navigate("/auth");
      return;
    }
  
    try {
      // Call the BOOK_PACKAGE mutation with "Pending" status
      const { data } = await bookPackage({
        variables: {
          packageId: state.packageDetails.id, // Package ID from state
          userId,
          date: formData.date,
          status: "Pending", // Set status as "Pending"
        },
      });
  
      if (data?.bookPackage) {
        toast.success(`Your booking for ${state.packageDetails.title} has been saved as pending.`, toastOptions);
        setTimeout(() => {
        navigate(`/booking-history/${userId}`)}, 3000
        );
      } else {
        toast.error("Failed to save booking. Please try again.", toastOptions);
      }
    } catch (err) {
      console.error("Error saving booking:", err);
      toast.error("An error occurred while saving the booking.", toastOptions);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions to proceed.", toastOptions);
      return;
    }

    const userId = localStorage.getItem("user-id");
    if (!userId) {
      toast.error("You must be logged in to confirm booking.", toastOptions);
      setTimeout(() => {
        navigate("/auth");
        }, 3000);
      return;
    }

    try {
      // Call the BOOK_PACKAGE mutation
      const { data } = await bookPackage({
        variables: {
          packageId: state.packageDetails.id, // Package ID from state
          userId,
          date: formData.date,
          status:"Confirmed",
        },
      });

      if (data?.bookPackage) {
        toast.success(`Booking confirmed for ${state.packageDetails.title}!`, toastOptions);
        setTimeout(() => {
          navigate(`/booking-history/${userId}`);
        }, 3000);  } else {
        toast.error("Failed to confirm booking. Please try again.", toastOptions);
      }
    } catch (err) {
      console.error("Error confirming booking:", err);
      toast.error("An error occurred while confirming the booking.", toastOptions);
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Confirm Your Booking</h1>
        <PackageDetails>
          <h2>Booking Details</h2>
          <p>
            <strong>Package:</strong> {state.packageDetails.title}
          </p>
          <p>
            <strong>Destination:</strong> {state.packageDetails.destination}
          </p>
          <p>
            <strong>Duration:</strong> {state.packageDetails.duration}
          </p>
          <p>
            <strong>Price:</strong> ₹{state.packageDetails.price}
          </p>
          <p>
            <strong>Additional Charges:</strong> ₹{additionalCharges} (Service &
            Tax)
          </p>
          <p className="total-price">
            <strong>Total Price:</strong> ₹{totalPrice}
          </p>
        </PackageDetails>

        <Form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Booking Date:
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>

          {/* Terms and Conditions */}
          <Terms>
            <input type="checkbox" onChange={handleCheckboxChange} /> I agree to the{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              terms and conditions
            </a>{" "}
            of the booking.
          </Terms>

          <button type="submit">Pay ₹{totalPrice} and Confirm Booking</button>
          <button id="later" onClick={handlePayLater}> Pay Later</button>
        </Form>
      </Container>
      <ToastContainer/>
      <Footer />
    </div>
  );
};

export default ConfirmBooking;

// Styled Components
const Container = styled.div`
  padding: 40px;
  padding-top: 100px;
  text-align: center;

  h1 {
    color: teal;
    margin-bottom: 20px;
  }
`;

const PackageDetails = styled.div`
  background: teal;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.17);
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  transition:all 0.1s ease-in-out;

  h2 {
    color: yellow;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color:white;
    margin: 5px 0;
  }

  .total-price {
    font-weight: bold;
    font-size: 1.2rem;
    color: rgb(89, 253, 89);
  }
    &:hover{
    transform:translateY(-5px);
    box-shadow:1px 1px 10px grey;}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.17);
  border-radius: 20px;
  gap: 15px;
  margin: 20px auto 0;
  max-width: 400px;

  label {
    display: flex;
    justify-content: space-between;
    color: teal;
    gap: 10px;

    input {
      border: 0.2px solid grey;
      padding: 5px;
      border-radius: 5px;
      flex: 1;
    }
      
  }
    button#later{
    background:grey;}

  button {
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: darkcyan;
      color: yellow;
    }
  }
`;

const Terms = styled.div`
  font-size: 0.9rem;
  color: #555;

  a {
    color: teal;
    text-decoration: underline;

    &:hover {
      color: darkcyan;
    }
  }
`;
