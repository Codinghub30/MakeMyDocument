import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String },
    date: { type: String },
    time: { type: String },
    source: { type: String },
    service: { type: String },
    address: { type: String },
    email: { type: String },
    mobilenumber: { type: String },
    assign: { type: String, default: "Select lead user" },
    district: { type: String, default: "N/A" },
    pincode: { type: String, default: "N/A" },
    state: { type: String, default: "N/A" },
    paidAmount: { type: String },
    followupDate: { type: Date, default: null },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "followup"],
      default: "pending",
    },
    registrationNumber: { type: String },
    registrationDate: { type: String },
    applying_for: { type: String },
    gender: { type: String },
    age: { type: String },
    disease: { type: String },
    existingpancardnumber: { type: String },
    dob: { type: String },
    travellingDate: { type: String },
    returningDate: { type: String },
    fathername: { type: String },
    mothername: { type: String },
    printOnPanCard: { type: String },
    identityOption: { type: String },
    stampPaper: { type: String },
    ownername: { type: String },
    ownerAddress: { type: String },
    ownerDistrict: { type: String },
    ownerPincode: { type: String },
    tenantName: { type: String },
    tenantaddress: { type: String },
    tenantPincode: { type: String },
    shiftingdate: { type: String },
    shiftingaddress: { type: String },
    monthlyrent: { type: String },
    shippingaddress: { type: String },
    waterCharges: { type: String },
    paintingCharges: { type: String },
    accommodation: { type: String },
    appliancesFittings: { type: String },
    villageTownCity: { type: String },
    adharnumber: { type: String },
    businessName: { type: String },
    organisationType: { type: String },
    dateOfIncorporation: { type: String },
    panNumber: { type: String },
    spouseName: { type: String },
    applicationType: { type: String },
    passportBookletType: { type: String },
    qualification: { type: String },
    employmentType: { type: String },
    maritalStatus: { type: String },
    bloodgroup: { type: String },
    paymentStatus: { type: String },
    source: { type: String },
    orderid: { type: String, unique: true },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
export default Lead;
