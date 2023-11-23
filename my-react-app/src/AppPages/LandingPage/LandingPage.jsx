import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import MainContent from "./MainContent";
import React, { useState } from "react";

function LandingPage() {
	return (
		<>
			<Navbar />
			<MainContent />
			<Footer />
		</>
	);
}

export default LandingPage;
