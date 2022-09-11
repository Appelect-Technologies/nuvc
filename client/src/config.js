export const config = {
  // baseUrl: "https://nuvc.org", //"https://seedonline.org","http://localhost:4000"
  baseUrl: "http://localhost:80",
  // process.env.NODE_ENV === "production"
  //   ? "https://api.nuvc.org"
  //   : "http://localhost:80",
  register: "/api/reg",
  personal: "/api/personal",
  address: "/api/address",
  qulification: "/api/qulification",
  prefrance: "/api/prefrance",
  document: "/api/document",
  upload: "/upload",
  pay: "/pay10",
  subscription: "/api/subscription",
  job: "/api/job",
  jobs: "/api/jobs",
  jobById: "/api/jobapplicants/:jobId",
  jobsByEmail: "/api/getJobsByEmail",
  digital: "/api/digital",
  digitals: "/api/digitals",
  checkApplyStatus: "/api/checkApplyStatus",
  news: "/api/news",
  getAllNews: "/api/getAllNews",
  leads: "/api/leads",
  paymentUrl: "http://localhost:80/payment",
  // process.env.NODE_ENV === "production"
  //   ? "https://api.nuvc.org/payment"
  //   : "http://localhost:80/payment",
  // : "http://localhost:80/pay10",
  trainingCentres: "/api/training-centers",
  subscriptions: "/api/subscriptions",
};
