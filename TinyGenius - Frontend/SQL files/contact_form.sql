-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 12, 2024 at 01:02 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact_form`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`Id`, `name`, `email`, `subject`, `message`, `created_at`) VALUES
(3, 'Muzna', 'fathimamuznamuhajireen@gmail.com', 'want to know something', 'Hello! Iâ€™m interested in knowing more about the topics covered on your website. Can you share some details?', '2024-12-12 12:58:03'),
(4, 'Amali', 'amali@gmail.com', 'reset progress', 'Hi there, Iâ€™d like to learn how to reset my childâ€™s progress on the platform. Could you assist?', '2024-12-12 12:58:46'),
(5, 'Kiran', 'kiran@gmail.com', 'trouble in access', 'Hello, Iâ€™m having trouble accessing some activities on the website. Can you help me fix this?', '2024-12-12 12:59:46'),
(6, 'Sahna', 'sahna@gmail.com', 'joining the team', 'Hi Tiny Genius Team, Iâ€™m a teacher/educator and would love to contribute content to your platform. Is that possible?', '2024-12-12 13:00:52'),
(7, 'Muzna', 's22010447@ousl.lk', 'hello', 'how are you', '2024-12-12 13:01:24'),
(8, 'Munshif', 's22010447@ousl.lk', 'name', 'How to add my name?', '2024-12-12 13:01:51');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
