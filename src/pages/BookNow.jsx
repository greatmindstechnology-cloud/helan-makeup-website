import { useState } from 'react';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';

function BookNow() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    service: '',
    package: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventType: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: '',
    trialSession: false,
    onSiteService: false,
    additionalServices: []
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Bridal Makeup',
    'Engagement Makeup',
    'Reception Makeup',
    'Party Makeup',
    'HD Makeup',
    'Airbrush Makeup',
    'Traditional Bridal',
    'Hairstyling',
    'Pre-Wedding Events'
  ];

  const packages = [
    'Essential (₹8,000)',
    'Premium (₹15,000)',
    'Bridal (₹25,000)',
    'Custom'
  ];

  const additionalServicesList = [
    'Mother/Sister Makeup',
    'Bridesmaid Makeup',
    'Mehndi Application',
    'Saree Draping',
    'Extra Trial Session'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAdditionalServiceToggle = (service) => {
    let updated;

    if (formData.additionalServices.includes(service)) {
      updated = formData.additionalServices.filter((s) => s !== service);
    } else {
      updated = [...formData.additionalServices, service];
    }

    setFormData({ ...formData, additionalServices: updated });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '9177082 86888';

    const message = `
New Booking Request:

Service: ${formData.service}
Package: ${formData.package}
Event Date: ${formData.eventDate}
Event Time: ${formData.eventTime}
Location: ${formData.eventLocation}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Special Requests: ${formData.specialRequests || 'None'}
Trial Session: ${formData.trialSession ? 'Yes' : 'No'}
On-Site Service: ${formData.onSiteService ? 'Yes' : 'No'}
Additional Services: ${formData.additionalServices.join(', ') || 'None'}
    `.trim();

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Service' },
    { number: 2, title: 'Event Details' },
    { number: 3, title: 'Your Info' },
    { number: 4, title: 'Confirm' }
  ];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="mb-4">Book Your Appointment</h1>
            <p style={{ color: 'var(--light-gray)' }}>
              Fill out the form below to book your makeup session
            </p>
          </div>

          {/* STEPS */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                        currentStep >= step.number ? 'scale-110' : ''
                      }`}
                      style={{
                        backgroundColor:
                          currentStep >= step.number ? 'var(--primary)' : 'var(--light-gray)',
                        color: 'var(--white)'
                      }}
                    >
                      {currentStep > step.number ? (
                        <Check size={24} />
                      ) : (
                        <span>{step.number}</span>
                      )}
                    </div>

                    <span
                      className="mt-2 text-sm hidden md:block"
                      style={{
                        color: currentStep >= step.number ? 'var(--black)' : 'var(--light-gray)'
                      }}
                    >
                      {step.title}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className="h-1 flex-1 mx-2"
                      style={{
                        backgroundColor:
                          currentStep > step.number ? 'var(--primary)' : 'var(--light-gray)'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">

              {/* STEP 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="mb-6">Select Your Service</h2>

                  {/* SERVICES */}
                  <label className="block mb-3" style={{ color: 'var(--gray)' }}>
                    Service Type *
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
                        style={{
                          border: `2px solid ${
                            formData.service === service ? 'var(--primary)' : 'var(--light-gray)'
                          }`,
                          backgroundColor:
                            formData.service === service ? 'var(--primary-light)' : 'transparent'
                        }}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleInputChange}
                          className="mr-3"
                          required
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>

                  {/* PACKAGES */}
                  <label className="block mb-3 mt-6" style={{ color: 'var(--gray)' }}>
                    Package *
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packages.map((pkg) => (
                      <label
                        key={pkg}
                        className="flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
                        style={{
                          border: `2px solid ${
                            formData.package === pkg ? 'var(--primary)' : 'var(--light-gray)'
                          }`,
                          backgroundColor:
                            formData.package === pkg ? 'var(--primary-light)' : 'transparent'
                        }}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={pkg}
                          checked={formData.package === pkg}
                          onChange={handleInputChange}
                          className="mr-3"
                          required
                        />
                        <span>{pkg}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="mb-6">Event Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* DATE */}
                    <div>
                      <label className="flex items-center mb-2">
                        <Calendar size={18} className="mr-2" />
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2"
                        style={{ borderColor: 'var(--light-gray)' }}
                      />
                    </div>

                    {/* TIME */}
                    <div>
                      <label className="block mb-2">Event Time *</label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2"
                        style={{ borderColor: 'var(--light-gray)' }}
                      />
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div>
                    <label className="flex items-center mb-2">
                      <MapPin size={18} className="mr-2" />
                      Event Location *
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2"
                      style={{ borderColor: 'var(--light-gray)' }}
                    />
                  </div>

                  {/* TYPE */}
                  <div>
                    <label className="block mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2"
                      style={{ borderColor: 'var(--light-gray)' }}
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Reception">Reception</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Mehendi">Mehendi</option>
                      <option value="Sangeet">Sangeet</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="mb-6">Your Information</h2>

                  {/* NAME */}
                  <div>
                    <label className="flex items-center mb-2">
                      <User size={18} className="mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-lg border-2"
                      style={{ borderColor: 'var(--light-gray)' }}
                    />
                  </div>

                  {/* EMAIL + PHONE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center mb-2">
                        <Mail size={18} className="mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-lg border-2"
                        style={{ borderColor: 'var(--light-gray)' }}
                      />
                    </div>

                    <div>
                      <label className="flex items-center mb-2">
                        <Phone size={18} className="mr-2" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border-2"
                        style={{ borderColor: 'var(--light-gray)' }}
                      />
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <label className="flex items-center mb-2">
                      <MapPin size={18} className="mr-2" />
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Your address"
                      className="w-full px-4 py-3 rounded-lg border-2"
                      style={{ borderColor: 'var(--light-gray)' }}
                    />
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="mb-6">Additional Details</h2>

                  {/* SPECIAL REQUESTS */}
                  <div>
                    <label className="flex items-center mb-2">
                      <MessageSquare size={18} className="mr-2" />
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any preferences..."
                      className="w-full px-4 py-3 rounded-lg border-2"
                      style={{ borderColor: 'var(--light-gray)' }}
                    />
                  </div>

                  {/* ADDITIONAL SERVICES */}
                  <div>
                    <label className="block mb-3" style={{ color: 'var(--gray)' }}>
                      Additional Services
                    </label>

                    <div className="space-y-2">
                      {additionalServicesList.map((service) => (
                        <label
                          key={service}
                          className="flex items-center p-3 rounded-lg cursor-pointer"
                          style={{ backgroundColor: 'var(--off-white)' }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.additionalServices.includes(service)}
                            onChange={() => handleAdditionalServiceToggle(service)}
                            className="mr-3"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* TRIAL + ONSITE */}
                  <div className="space-y-3">
                    <label
                      className="flex items-center p-3 rounded-lg cursor-pointer"
                      style={{ backgroundColor: 'var(--off-white)' }}
                    >
                      <input
                        type="checkbox"
                        name="trialSession"
                        checked={formData.trialSession}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>I want a trial session</span>
                    </label>

                    <label
                      className="flex items-center p-3 rounded-lg cursor-pointer"
                      style={{ backgroundColor: 'var(--off-white)' }}
                    >
                      <input
                        type="checkbox"
                        name="onSiteService"
                        checked={formData.onSiteService}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>I need on-site service</span>
                    </label>
                  </div>

                  {/* SUMMARY */}
                  <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--off-white)' }}>
                    <h3 className="mb-4">Booking Summary</h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>{formData.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span>{formData.package}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{formData.eventDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{formData.eventTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>{formData.eventLocation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* BUTTONS */}
              <div
                className="flex items-center justify-between mt-8 pt-8 border-t"
                style={{ borderColor: 'var(--light-gray)' }}
              >
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor:
                      currentStep === 1 ? 'var(--light-gray)' : 'var(--off-white)',
                    color: 'var(--black)'
                  }}
                >
                  <ArrowLeft size={20} />
                  <span>Previous</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg hover:scale-105"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
                  >
                    <span>Next</span>
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-8 py-3 rounded-lg hover:scale-105"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
                  >
                    <Check size={20} />
                    <span>Submit Booking</span>
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="bg-white p-12 rounded-lg shadow-lg text-center">

              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <Check size={40} className="text-white" />
              </div>

              <h2 className="mb-4">Booking Request Sent!</h2>

              <p className="mb-8" style={{ color: 'var(--gray)' }}>
                Thank you! We will contact you soon to confirm.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    service: '',
                    package: '',
                    eventDate: '',
                    eventTime: '',
                    eventLocation: '',
                    eventType: '',
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    specialRequests: '',
                    trialSession: false,
                    onSiteService: false,
                    additionalServices: []
                  });
                }}
                className="px-8 py-3 rounded-lg hover:scale-105"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
              >
                Make Another Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookNow;
