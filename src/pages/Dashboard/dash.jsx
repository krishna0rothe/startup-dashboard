import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const statusColors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

// Dummy startup data
const dummyStartups = [
  {
    _id: "66e08854929934905abba532",
    logo: "https://example.com/logo1.png",
    stage: "Validation",
    startupName: "HealthFirst",
    brief: "Pioneering healthcare solutions for a healthier future.",
    funded: "Funded",
    email: "contact@healthfirst.com",
    mobile: "9123456789",
    state: "Gujarat",
    city: "Surat",
    website: "https://healthfirst.com",
    industry: "Healthcare",
    status: "Pending",
    createdAt: "2024-09-10T17:56:36.137Z",
  },
  {
    _id: "66e08854929934905abba533",
    logo: "https://example.com/logo2.png",
    stage: "Scaling",
    startupName: "GreenEnergy",
    brief: "Innovative renewable energy solutions.",
    funded: "Funded",
    email: "info@greenenergy.com",
    mobile: "9876543210",
    state: "Gujarat",
    city: "Ahmedabad",
    website: "https://greenenergy.com",
    industry: "Energy",
    status: "Approved",
    createdAt: "2024-08-15T12:00:00.000Z",
  },
  {
    _id: "66e08854929934905abba534",
    logo: "https://example.com/logo3.png",
    stage: "Early Traction",
    startupName: "AgriTech Solutions",
    brief: "Transforming agriculture with technology.",
    funded: "Not Funded",
    email: "contact@agritech.com",
    mobile: "9988776655",
    state: "Gujarat",
    city: "Rajkot",
    website: "https://agritech.com",
    industry: "Agriculture",
    status: "Pending",
    createdAt: "2024-09-05T09:30:00.000Z",
  },
  {
    _id: "66e08854929934905abba535",
    logo: "https://example.com/logo4.png",
    stage: "Ideation",
    startupName: "SmartEdTech",
    brief: "Smart education solutions for the digital era.",
    funded: "Not Funded",
    email: "hello@smartedtech.com",
    mobile: "9191919191",
    state: "Gujarat",
    city: "Vadodara",
    website: "https://smartedtech.com",
    industry: "Education",
    status: "Rejected",
    createdAt: "2024-07-20T14:45:00.000Z",
  },
];

export default function DashboardHomePage() {
  const [startups, setStartups] = useState([]);
  const [stats] = useState({
    startupCount: 10,
    researchCount: 5,
    mentorCount: 12,
    fundingRaised: "₹2 Crore",
  });
  const [chartData] = useState([
    {
      month: "January",
      startups: 2,
      researchProjects: 1,
      fundingRaised: 100000,
    },
    {
      month: "February",
      startups: 3,
      researchProjects: 2,
      fundingRaised: 150000,
    },
    { month: "March", startups: 4, researchProjects: 3, fundingRaised: 200000 },
    { month: "April", startups: 6, researchProjects: 4, fundingRaised: 300000 },
    { month: "May", startups: 8, researchProjects: 5, fundingRaised: 500000 },
    { month: "June", startups: 9, researchProjects: 6, fundingRaised: 750000 },
    {
      month: "July",
      startups: 11,
      researchProjects: 7,
      fundingRaised: 1000000,
    },
    {
      month: "August",
      startups: 14,
      researchProjects: 8,
      fundingRaised: 1250000,
    },
    {
      month: "September",
      startups: 16,
      researchProjects: 10,
      fundingRaised: 2000000,
    },
  ]);

  useEffect(() => {
    // Simulate fetching data from a local store
    const fetchData = async () => {
      try {
        // Simulating async fetch with a timeout
        setTimeout(() => {
          setStartups(dummyStartups.slice(0, 5)); // Show the first 5 startups
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ padding: "20px", maxWidth: "100%", overflow: "hidden" }}>
      {/* Top Cards */}
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#f0f4c3" }}>
            {" "}
            {/* Light Green */}
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Startups
              </Typography>
              <Typography variant="h4">{stats.startupCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#bbdefb" }}>
            {" "}
            {/* Light Blue */}
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Research Projects
              </Typography>
              <Typography variant="h4">{stats.researchCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#ffcdd2" }}>
            {" "}
            {/* Light Red */}
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Mentors
              </Typography>
              <Typography variant="h4">{stats.mentorCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#d1c4e9" }}>
            {" "}
            {/* Light Purple */}
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Funding Raised
              </Typography>
              <Typography variant="h4">{stats.fundingRaised}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Line Chart */}
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Progress - Startups, Research Projects, and Funding
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="startups"
                stroke="#8884d8"
                name="Startups"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="researchProjects"
                stroke="#82ca9d"
                name="Research Projects"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="fundingRaised"
                stroke="#ffc658"
                name="Funding Raised (₹)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Latest Startups Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Latest Startups
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="startup table">
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date Created</TableCell>
                  <TableCell>Industry</TableCell>
                  <TableCell>Stage</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {startups.map((startup) => (
                  <TableRow key={startup._id}>
                    <TableCell>
                      <Avatar
                        src={startup.logo || "/placeholder.svg"}
                        alt={startup.startupName}
                      />
                    </TableCell>
                    <TableCell>{startup.startupName}</TableCell>
                    <TableCell>
                      {new Date(startup.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{startup.industry}</TableCell>
                    <TableCell>{startup.stage}</TableCell>
                    <TableCell>
                      <Chip
                        label={startup.status}
                        color={statusColors[startup.status]}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
