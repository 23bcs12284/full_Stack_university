function Dashboard() {
  const role = localStorage.getItem("role");

  if (role === "CUSTOMER") {
    return <h2>Welcome Customer! Here are your bookings.</h2>;
  } else if (role === "MECHANIC") {
    return <h2>Welcome Mechanic! Here are your assigned jobs.</h2>;
  } else if (role === "ADMIN") {
    return <h2>Welcome Admin! You can manage users and services.</h2>;
  } else {
    return <h2>No role found. Please login again.</h2>;
  }
}

export default Dashboard;
