--
-- PostgreSQL database
--
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';
SET default_table_access_method = heap;

--
-- Name: Admins; Type: TABLE; Schema: public; Owner: corey
--
CREATE TABLE public.admins (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    salt VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);

--
-- Data for Name: Admins; Type: TABLE DATA; Schema: public; Owner: corey
-- For testing purposes only
--
-- test MYPASSWORD
-- TODO: !!CHANGE / DELETE THIS!!
INSERT INTO public.admins (userID, username, passwordHash, salt, email)
VALUES (1, 'test', '4ac77a4678fce2d99a580b03ac88e605c8447436eb4feb8fc11b3beaa7bac56b331f133cc26a1d7da3627304fcc23c1cf6b531dc23640c4352eb1f2086bbc159', '433defba2c2ca104', 'test@test.com');

--
-- Name: Call; Type: TABLE; Schema: public; Owner: corey
--
CREATE TABLE public.call (
	recordID SERIAL PRIMARY KEY,
	callNumber INTEGER NOT NULL,
	callDateTime TIMESTAMP NOT NULL,
	priority VARCHAR(20) NOT NULL,
	description VARCHAR(1000) NOT NULL
);

--
-- Name: Jurisdiction; Type: TABLE; Schema: public; Owner: corey
--
CREATE TABLE public.jurisdiction (
  recordID SERIAL PRIMARY KEY,
  policeDistrict VARCHAR(20) NOT NULL,
  policePost VARCHAR(10) NOT NULL,
  councilDistrict VARCHAR(10) NOT NULL,
  sherriffDistricts VARCHAR(20) NOT NULL
);

--
-- Name: Location; Type: TABLE; Schema: public; Owner: corey
--
CREATE TABLE public.location (
  recordID SERIAL PRIMARY KEY,
  district VARCHAR(10) NOT NULL,
  incidentLocation VARCHAR(100) NOT NULL,
  zipCode VARCHAR(10) NOT NULL,
  neighborhood VARCHAR(50) NOT NULL,
  location json NOT NULL
);

--
-- Name: Stats; Type: TABLE; Schema: public; Owner: corey
--
CREATE TABLE public.stats (
  recordID SERIAL PRIMARY KEY,
  community_Statistical_Areas VARCHAR(200) NOT NULL,
  census_Tracts VARCHAR(50) NOT NULL,
  VRIZones VARCHAR(50) NOT NULL
);
