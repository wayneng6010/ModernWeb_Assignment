-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2019 at 03:38 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `competition_register`
--

-- --------------------------------------------------------

--
-- Table structure for table `chromatic_cat`
--

CREATE TABLE `chromatic_cat` (
  `Solo_ID` int(11) NOT NULL,
  `Solo_UserID` int(11) NOT NULL,
  `Solo_Cat` varchar(20) NOT NULL,
  `Solo_Fname` varchar(30) NOT NULL,
  `Solo_Title` varchar(30) NOT NULL,
  `Solo_Composer` varchar(30) NOT NULL,
  `Solo_Arranger` varchar(30) NOT NULL,
  `Solo_Accompaniment` varchar(30) NOT NULL,
  `Solo_Pianist` varchar(30) NOT NULL,
  `Solo_Status` varchar(30) NOT NULL,
  `Solo_PaymentDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chromatic_cat`
--

INSERT INTO `chromatic_cat` (`Solo_ID`, `Solo_UserID`, `Solo_Cat`, `Solo_Fname`, `Solo_Title`, `Solo_Composer`, `Solo_Arranger`, `Solo_Accompaniment`, `Solo_Pianist`, `Solo_Status`, `Solo_PaymentDate`) VALUES
(1, 1, 'cat3', 'Ng Tat', 'Happy Shark', 'Mun Cak', 'Gan Siew', 'CD', '-', 'paid', '2019-11-21 11:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `ensemble_cat`
--

CREATE TABLE `ensemble_cat` (
  `Ensemble_ID` int(11) NOT NULL,
  `Ensemble_UserID` int(11) NOT NULL,
  `Ensemble_Cat` varchar(30) NOT NULL,
  `Ensemble_TeamName` varchar(30) NOT NULL,
  `Ensemble_MemberCount` int(11) NOT NULL,
  `Ensemble_Title` varchar(30) NOT NULL,
  `Ensemble_Composer` varchar(30) NOT NULL,
  `Ensemble_Arranger` varchar(30) NOT NULL,
  `Ensemble_First` varchar(30) NOT NULL,
  `Ensemble_Second` varchar(30) NOT NULL,
  `Ensemble_Third` varchar(30) NOT NULL,
  `Ensemble_Forth` varchar(30) NOT NULL,
  `Ensemble_Bass` varchar(30) NOT NULL,
  `Ensemble_Chord` varchar(30) NOT NULL,
  `Ensemble_Status` varchar(30) NOT NULL,
  `Ensemble_PaymentDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ensemble_cat`
--

INSERT INTO `ensemble_cat` (`Ensemble_ID`, `Ensemble_UserID`, `Ensemble_Cat`, `Ensemble_TeamName`, `Ensemble_MemberCount`, `Ensemble_Title`, `Ensemble_Composer`, `Ensemble_Arranger`, `Ensemble_First`, `Ensemble_Second`, `Ensemble_Third`, `Ensemble_Forth`, `Ensemble_Bass`, `Ensemble_Chord`, `Ensemble_Status`, `Ensemble_PaymentDate`) VALUES
(1, 1, 'cat1', 'Just Do It', 4, 'Turkish', 'Mozart', 'Me Too', 'Ali', 'Ahmad', '-', '-', 'Muthu', 'Ah Kow', 'paid', '2019-11-21 11:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `orchestra_cat`
--

CREATE TABLE `orchestra_cat` (
  `Orchestra_ID` int(11) NOT NULL,
  `Orchestra_UserID` int(11) NOT NULL,
  `Orchestra_Cat` varchar(30) NOT NULL,
  `Orchestra_Name` varchar(30) NOT NULL,
  `Orchestra_Title` varchar(30) NOT NULL,
  `Orchestra_Composer` varchar(30) NOT NULL,
  `Orchestra_Arranger` varchar(30) NOT NULL,
  `Orchestra_SectionName` text NOT NULL,
  `Orchestra_Status` varchar(30) NOT NULL,
  `Orchestra_PaymentDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orchestra_cat`
--

INSERT INTO `orchestra_cat` (`Orchestra_ID`, `Orchestra_UserID`, `Orchestra_Cat`, `Orchestra_Name`, `Orchestra_Title`, `Orchestra_Composer`, `Orchestra_Arranger`, `Orchestra_SectionName`, `Orchestra_Status`, `Orchestra_PaymentDate`) VALUES
(1, 1, 'cat1', 'Genius Orchestra', 'Czardas', 'Beethoven Son', 'Bi Pong', '{\"First\":[\"Abigail\",\"Alexandra\",\"Alison\"],\"Second\":[\"Carol\",\"Caroline\",\"Carolyn\"],\"Percussion\":[\"Elizabeth\",\"Ella\",\"Emily\",\"Emma\"]}', 'paid', '2019-11-21 11:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `seminar`
--

CREATE TABLE `seminar` (
  `Sem_ID` int(11) NOT NULL,
  `Sem_UserID` int(11) NOT NULL,
  `Sem_Session` varchar(20) NOT NULL,
  `Sem_Quantity` int(11) NOT NULL,
  `Sem_Status` varchar(20) NOT NULL,
  `Sem_PaymentDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seminar`
--

INSERT INTO `seminar` (`Sem_ID`, `Sem_UserID`, `Sem_Session`, `Sem_Quantity`, `Sem_Status`, `Sem_PaymentDate`) VALUES
(2, 1, 'ses2', 3, 'paid', '2019-11-21 11:04:07'),
(3, 1, 'ses3', 3, 'paid', '2019-11-21 11:04:07'),
(4, 1, 'ses1', 1, 'paid', '2019-11-21 11:04:07'),
(5, 1, 'ses1', 1, 'paid', '2019-11-21 11:06:15');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `User_ID` int(11) NOT NULL,
  `User_Name` varchar(30) NOT NULL,
  `User_Email` varchar(50) NOT NULL,
  `User_Password` varchar(255) NOT NULL,
  `User_PhoneNo` varchar(20) NOT NULL,
  `User_Created` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`User_ID`, `User_Name`, `User_Email`, `User_Password`, `User_PhoneNo`, `User_Created`) VALUES
(1, 'Ng Yuan Shen', 'wayne.ng6010@gmail.com', '$2y$10$AwYvRUFDDDyRsHocwwlu6el6sF2tJvbYMfCTRt68wsUpjUXZdtIrG', '01110961899', '2019-11-21 10:36:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chromatic_cat`
--
ALTER TABLE `chromatic_cat`
  ADD PRIMARY KEY (`Solo_ID`);

--
-- Indexes for table `ensemble_cat`
--
ALTER TABLE `ensemble_cat`
  ADD PRIMARY KEY (`Ensemble_ID`);

--
-- Indexes for table `orchestra_cat`
--
ALTER TABLE `orchestra_cat`
  ADD PRIMARY KEY (`Orchestra_ID`);

--
-- Indexes for table `seminar`
--
ALTER TABLE `seminar`
  ADD PRIMARY KEY (`Sem_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chromatic_cat`
--
ALTER TABLE `chromatic_cat`
  MODIFY `Solo_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ensemble_cat`
--
ALTER TABLE `ensemble_cat`
  MODIFY `Ensemble_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orchestra_cat`
--
ALTER TABLE `orchestra_cat`
  MODIFY `Orchestra_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `seminar`
--
ALTER TABLE `seminar`
  MODIFY `Sem_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
