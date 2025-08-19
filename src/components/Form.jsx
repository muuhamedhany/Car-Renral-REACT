import React, { useState, useMemo } from 'react';
import cars from '../data/cars.json';
import locations from '../data/locations.json';
import audi from '../images/models/audi.png';
import golf6 from '../images/models/golf6.png';
import camry from '../images/models/toyota.png';
import bmw from '../images/models/bmw.png';
import benz from '../images/models/benz.png';
import passat from '../images/models/passat.png';
import { TfiClose } from 'react-icons/tfi';

const imageByKey = {
  audi,
  golf6,
  camry,
  bmw,
  benz,
  passat,
};

const Form = () => {
  const carNames = cars.map((c) => c.name);

  const [carType, setCarType] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [error, setError] = useState('');

  const [showSummary, setShowSummary] = useState(false);

  // Personal info states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [acceptUpdates, setAcceptUpdates] = useState(false);
  const [personalError, setPersonalError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const selectedCar = useMemo(
    () => cars.find((c) => c.name === carType),
    [carType],
  );
  const selectedCarImg = selectedCar ? imageByKey[selectedCar.imgKey] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carType || !pickup || !dropoff || !pickupDate || !dropoffDate) {
      setError('All fields required!');
      return;
    }
    setError('');
    setShowSummary(true);
    setSuccessMsg('');
  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    const ageNum = Number(age);
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !age ||
      Number.isNaN(ageNum) ||
      ageNum < 18 ||
      !email ||
      !address ||
      !city ||
      !zip
    ) {
      setPersonalError('Please complete all fields.');
      setSuccessMsg('');
      return;
    }
    setPersonalError('');
    setSuccessMsg("Reservation request submitted! We'll contact you shortly.");
  };

  const closeSummary = () => {
    setShowSummary(false);
    setPersonalError('');
    setSuccessMsg('');
  };

  return (
    <div className="cont mt-50" id="Form">
      <div className="bg-surface py-15 px-10 border border-[#b0ada958] rounded-2xl shadowPrim">
        <div>
          <h4 className="Heading2 pb-5 font-bold">Rent a car</h4>

          {error && (
            <div
              className="mb-5 rounded-md px-4 py-3 Normal"
              style={{ backgroundColor: '#ffd7d1', color: '#7a1c12' }}
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            <div>
              <label htmlFor="carType" className="block Normal pb-2">
                Select Your Car Type:<span className="text-[#ff4d31]">*</span>
              </label>
              <select
                id="carType"
                className="input-surface py-2 px-5 w-full rounded-[5px]"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
              >
                <option value="">Select Your Car Type</option>
                {carNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="pickup" className="block Normal pb-2">
                Pick-up Location:<span className="text-[#ff4d31]">*</span>
              </label>
              <select
                id="pickup"
                className="input-surface py-2 px-5 w-full rounded-[5px]"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              >
                <option value="">Select Pick-up Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="dropoff" className="block Normal pb-2">
                Drop-off Location:<span className="text-[#ff4d31]">*</span>
              </label>
              <select
                id="dropoff"
                className="input-surface py-2 px-5 w-full rounded-[5px]"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              >
                <option value="">Select Drop-off Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="pickupDate" className="block Normal pb-2">
                Pick-up Date:<span className="text-[#ff4d31]">*</span>
              </label>
              <input
                id="pickupDate"
                type="date"
                className="input-surface py-2 px-5 md:w-full rounded-[5px]"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="dropoffDate" className="block Normal pb-2">
                Drop-off:<span className="text-[#ff4d31]">*</span>
              </label>
              <input
                id="dropoffDate"
                type="date"
                className="input-surface py-2 px-5 w-full rounded-[5px]"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
              />
            </div>
            <div className="flex">
              <button type="submit" className="primary-btn w-full">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSummary && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSummary();
          }}
        >
          <div className="modal-card">
            <div className=" flex justify-between items-center mb-4">
              <h3 className="Heading2 font-bold">Confirm your booking</h3>
              <button
                className="primary-text text-4xl md:hidden "
                onClick={closeSummary}
              >
                <TfiClose />
              </button>
            </div>

            {/* Summary section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-surface rounded-xl p-4">
                <h4 className="Normal font-semibold mb-3">Your selection</h4>
                {selectedCarImg && (
                  <img
                    src={selectedCarImg}
                    alt={carType}
                    className="w-full max-h-[220px] object-contain mb-3"
                  />
                )}
                <ul className="Paragraph">
                  <li>
                    <strong>Car:</strong> {carType}
                  </li>
                  <li>
                    <strong>Pick-up:</strong> {pickup} on {pickupDate}
                  </li>
                  <li>
                    <strong>Drop-off:</strong> {dropoff} on {dropoffDate}
                  </li>
                </ul>
              </div>

              {/* Personal info form */}
              <div className="bg-surface rounded-xl p-4">
                <h4 className="Normal font-semibold mb-3">
                  Personal information
                </h4>

                {personalError && (
                  <div
                    className="mb-4 rounded-md px-4 py-3 Paragraph"
                    style={{ backgroundColor: '#ffd7d1', color: '#7a1c12' }}
                  >
                    {personalError}
                  </div>
                )}
                {successMsg && (
                  <div
                    className="mb-4 rounded-md px-4 py-3 Paragraph"
                    style={{ backgroundColor: '#d1ffdc', color: '#0f5132' }}
                  >
                    {successMsg}
                  </div>
                )}

                <form
                  onSubmit={handlePersonalSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label htmlFor="firstName" className="block Paragraph pb-1">
                      First name<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="firstName"
                      className="input-surface"
                      placeholder="e.g., Muhammed"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block Paragraph pb-1">
                      Last name<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="lastName"
                      className="input-surface"
                      placeholder="e.g., Hany"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block Paragraph pb-1">
                      Phone number<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="phone"
                      className="input-surface"
                      placeholder="e.g., +020 100 489 9835"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block Paragraph pb-1">
                      Age<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="age"
                      className="input-surface"
                      placeholder="e.g., 21"
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block Paragraph pb-1">
                      Email<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="email"
                      className="input-surface"
                      placeholder="e.g., muuhamedhany@gmail.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block Paragraph pb-1">
                      Address<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="address"
                      className="input-surface"
                      placeholder="e.g., 123 Main St, Apt 4B"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block Paragraph pb-1">
                      City<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="city"
                      className="input-surface"
                      placeholder="e.g., Cairo"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block Paragraph pb-1">
                      Zip code<span className="text-[#ff4d31]">*</span>
                    </label>
                    <input
                      id="zip"
                      className="input-surface"
                      placeholder="e.g., 10001"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center gap-3 Paragraph">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        checked={acceptUpdates}
                        onChange={(e) => setAcceptUpdates(e.target.checked)}
                      />
                      Please send me latest news and updates
                    </label>
                  </div>

                  <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                    <button type="submit" className="primary-btn">
                      Confirm reservation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
