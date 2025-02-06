"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Building2, Landmark, Heart, Star } from "lucide-react";
import Link from "next/link";
import axios from "axios";
const DonateNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [selectedFundType, setSelectedFundType] = useState("zakat");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend using Axios
      const response = await axios.post(
        "http://localhost:5000/api/donate",
        formData
      ); // Replace "/api/donate" with your actual API endpoint

      // Check if the request was successful
      if (response.status === 200 || response.status === 201) {
        alert("Thank you for your Generous Donation!");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        alert("There was an issue submitting your donation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert(
        "An error occurred while submitting your donation. Please try again."
      );
    }
  };

  const bankAccounts = {
    zakat: [
      {
        bankName: "MCB Bank (Zakat Fund)",
        accountTitle: "Autism Resource Centre Lahore - Zakat",
        accountNumber: "0000 0000 1478 4462",
        branch: "Wapda Town Lahore",
        icon: <Building2 className="w-10 h-10 text-blue-950" />,
      },
      {
        bankName: "Meezan Bank (Zakat Fund)",
        accountTitle: "Autism Resource Centre Lahore - Zakat",
        accountNumber: "0000 0000 1234 5678",
        branch: "Wapda Town Lahore",
        icon: <Landmark className="w-10 h-10 text-blue-950" />,
      },
    ],
    donation: [
      {
        bankName: "MCB Bank (Donation Fund)",
        accountTitle: "Autism Resource Centre Lahore - Donation",
        accountNumber: "0000 0000 8765 4321",
        branch: "Wapda Town Lahore",
        icon: <Building2 className="w-10 h-10 text-blue-950" />,
      },
      {
        bankName: "Meezan Bank (Donation Fund)",
        accountTitle: "Autism Resource Centre Lahore - Donation",
        accountNumber: "0000 0000 9876 5432",
        branch: "Wapda Town Lahore",
        icon: <Landmark className="w-10 h-10 text-blue-950" />,
      },
    ],
  };

  return (
    <div className="py-24 min-h-screen bg-gray-100">
      {/* How Can You Help Section */}
      <div className="bg-blue-950 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-6 font-hand">
            How Can You Help?
          </h1>
          <p className="text-lg">
            The children with Autism have all the rights to be trained and
            educated. Since the therapies and treatment is very expensive and is
            individually based, demands extra resources (not affordable by most
            of the parents in Pakistan), it is imperative that volunteers should
            come foreword and help this noble cause. ARCL is a nonprofit
            organisation registered with City District Government Lahore with
            registration number RP/9668-L/S/15/2105 since January 2016. We
            regularly audit our accounts for transparency.
          </p>
        </div>
      </div>

      {/* Bank Transfer Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-950 mb-8 font-hand">
              Bank Transfer Details
            </h2>

            {/* Fund Type Selection */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedFundType("zakat")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                  selectedFundType === "zakat"
                    ? "bg-blue-950 text-white"
                    : "bg-gray-100 text-blue-950"
                }`}
              >
                <Star className="w-5 h-5" />
                Zakat Fund
              </button>
              <button
                onClick={() => setSelectedFundType("donation")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                  selectedFundType === "donation"
                    ? "bg-blue-950 text-white"
                    : "bg-gray-100 text-blue-950"
                }`}
              >
                <Heart className="w-5 h-5" />
                General Donation
              </button>
            </div>

            {/* Fund Type Description */}
            <div className="text-center mb-8">
              {selectedFundType === "zakat" ? (
                <p className="text-gray-600">
                  Zakat funds are used specifically for supporting eligible
                  families and individuals according to Islamic principles of
                  Zakat distribution.
                </p>
              ) : (
                <p className="text-gray-600">
                  General donation funds are used for overall operational costs,
                  therapy subsidies, and development of our facilities and
                  programs.
                </p>
              )}
            </div>

            {/* Bank Accounts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {bankAccounts[selectedFundType].map((account, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50 flex flex-row items-center gap-4 p-6">
                    {account.icon}
                    <div>
                      <h3 className="text-xl font-bold text-blue-950">
                        {account.bankName}
                      </h3>
                      <p className="text-gray-600">{account.branch}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <label className="text-sm text-gray-500">
                        Account Title
                      </label>
                      <p className="font-medium">{account.accountTitle}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">
                        Account Number
                      </label>
                      <p className="font-medium">{account.accountNumber}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-8 text-center text-gray-600">
              <p className="mb-4">
                After making the transfer, please email your transaction details
                to{" "}
                <Link
                  href="mailto:afbhatti1@yahoo.co.uk"
                  className="text-blue-950 font-medium hover:underline"
                >
                  afbhatti1@yahoo.co.uk
                </Link>
              </p>
              <p>
                For assistance, call us at:{" "}
                <span className="text-blue-950 font-medium">
                  042-35248222, 0300-9579526, 0303-6655444
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-4xl text-blue-950 font-hand font-bold text-center mb-6">
            I Want to Donate
          </h1>
          <p className="text-center mb-6">
            Please fill out the form below to let us know how you can help, and
            we will get in touch with you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">
                First Name (required)
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Last Name (required)
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Your Phone Number (required)
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Your Email (required)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white p-2 rounded mt-4 hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
