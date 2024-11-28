import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VerifiedIcon from '@mui/icons-material/Verified';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';


const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


// TODO - data will came from backend server 
const states = [
  {
    code: "AN",
    name: "Andaman and Nicobar Islands"
  },
  {
    code: "AP",
    name: "Andhra Pradesh"
  },
  {
    code: "AR",
    name: "Arunachal Pradesh"
  },
  {
    code: "AS",
    name: "Assam"
  },
  {
    code: "BR",
    name: "Bihar"
  },
  {
    code: "CG",
    name: "Chandigarh"
  },
  {
    code: "CH",
    name: "Chhattisgarh"
  },
  {
    code: "DH",
    name: "Dadra and Nagar Haveli"
  },
  {
    code: "DD",
    name: "Daman and Diu"
  },
  {
    code: "DL",
    name: "Delhi"
  },
  {
    code: "GA",
    name: "Goa"
  },
  {
    code: "GJ",
    name: "Gujarat"
  },
  {
    code: "HR",
    name: "Haryana"
  },
  {
    code: "HP",
    name: "Himachal Pradesh"
  },
  {
    code: "JK",
    name: "Jammu and Kashmir"
  },
  {
    code: "JH",
    name: "Jharkhand"
  },
  {
    code: "KA",
    name: "Karnataka"
  },
  {
    code: "KL",
    name: "Kerala"
  },
  {
    code: "LD",
    name: "Lakshadweep"
  },
  {
    code: "MP",
    name: "Madhya Pradesh"
  },
  {
    code: "MH",
    name: "Maharashtra"
  },
  {
    code: "MN",
    name: "Manipur"
  },
  {
    code: "ML",
    name: "Meghalaya"
  },
  {
    code: "MZ",
    name: "Mizoram"
  },
  {
    code: "NL",
    name: "Nagaland"
  },
  {
    code: "OR",
    name: "Odisha"
  },
  {
    code: "PY",
    name: "Puducherry"
  },
  {
    code: "PB",
    name: "Punjab"
  },
  {
    code: "RJ",
    name: "Rajasthan"
  },
  {
    code: "SK",
    name: "Sikkim"
  },
  {
    code: "TN",
    name: "Tamil Nadu"
  },
  {
    code: "TS",
    name: "Telangana"
  },
  {
    code: "TR",
    name: "Tripura"
  },
  {
    code: "UP",
    name: "Uttar Pradesh"
  },
  {
    code: "UK",
    name: "Uttarakhand"
  },
  {
    code: "WB",
    name: "West Bengal"
  }
];
const districtsData = {
  AN: [
    { code: "NIC", name: "Nicobar" },
    { code: "NOR", name: "North and Middle Andaman" },
    { code: "SAD", name: "South Andaman" }
  ],
  AP: [
    { code: "ANI", name: "Anantapur" },
    { code: "CHI", name: "Chittoor" },
    { code: "EGO", name: "East Godavari" },
    { code: "GUN", name: "Guntur" },
    { code: "KRI", name: "Krishna" },
    { code: "KUR", name: "Kurnool" },
    { code: "NEL", name: "Nellore" },
    { code: "PRA", name: "Prakasam" },
    { code: "SRI", name: "Srikakulam" },
    { code: "VIS", name: "Visakhapatnam" },
    { code: "VIZ", name: "Vizianagaram" },
    { code: "WGO", name: "West Godavari" },
    { code: "YSR", name: "YSR Kadapa" }
  ],
  AR: [
    { code: "TWA", name: "Tawang" },
    { code: "WKA", name: "West Kameng" },
    { code: "EPA", name: "East Kameng" },
    { code: "PAP", name: "Papum Pare" },
    { code: "KRA", name: "Kra Daadi" },
    { code: "KUR", name: "Kurung Kumey" },
    { code: "LOH", name: "Lohit" },
    { code: "LON", name: "Longding" },
    { code: "NTA", name: "Namsai" },
    { code: "SIA", name: "Siang" },
    { code: "TIR", name: "Tirap" },
    { code: "WSE", name: "West Siang" },
    { code: "UPA", name: "Upper Subansiri" }
  ],
  AS: [
    { code: "BAK", name: "Baksa" },
    { code: "BAR", name: "Barpeta" },
    { code: "BIS", name: "Biswanath" },
    { code: "BONG", name: "Bongaigaon" },
    { code: "CCH", name: "Cachar" },
    { code: "CHH", name: "Charaideo" },
    { code: "DMK", name: "Dima Hasao" },
    { code: "DUB", name: "Dhubri" },
    { code: "DGA", name: "Darrang" },
    { code: "DHE", name: "Dhemaji" },
    { code: "DIB", name: "Dibrugarh" },
    { code: "GOA", name: "Goalpara" },
    { code: "JOR", name: "Jorhat" },
    { code: "KAM", name: "Kamrup" },
    { code: "KMM", name: "Kamrup Metropolitan" },
    { code: "KAR", name: "Karbi Anglong" },
    { code: "KAS", name: "Karimganj" },
    { code: "KOK", name: "Kokrajhar" },
    { code: "LAK", name: "Lakhimpur" },
    { code: "MAJ", name: "Majuli" },
    { code: "MAR", name: "Morigaon" },
    { code: "NAG", name: "Nagaon" },
    { code: "NAL", name: "Nalbari" },
    { code: "SIV", name: "Sivasagar" },
    { code: "SON", name: "Sonitpur" },
    { code: "TAM", name: "Tinsukia" },
    { code: "UDL", name: "Udalguri" }
  ],
  BR: [
    { code: "ARP", name: "Araria" },
    { code: "ARR", name: "Arwal" },
    { code: "AUR", name: "Aurangabad" },
    { code: "BAN", name: "Banka" },
    { code: "BGD", name: "Begusarai" },
    { code: "BHU", name: "Bhagalpur" },
    { code: "BOJ", name: "Bhojpur" },
    { code: "BUX", name: "Buxar" },
    { code: "DHA", name: "Darbhanga" },
    { code: "ECA", name: "East Champaran" },
    { code: "GAY", name: "Gaya" },
    { code: "GOP", name: "Gopalganj" },
    { code: "JAM", name: "Jamui" },
    { code: "JEH", name: "Jehanabad" },
    { code: "KAI", name: "Kaimur" },
    { code: "KAT", name: "Katihar" },
    { code: "KIS", name: "Kishanganj" },
    { code: "KHA", name: "Khagaria" },
    { code: "LAK", name: "Lakhisarai" },
    { code: "MAD", name: "Madhubani" },
    { code: "MUN", name: "Munger" },
    { code: "NAW", name: "Nawada" },
    { code: "NAL", name: "Nalanda" },
    { code: "PAT", name: "Patna" },
    { code: "PUR", name: "Purnia" },
    { code: "ROH", name: "Rohtas" },
    { code: "SAH", name: "Saharsa" },
    { code: "SAM", name: "Samastipur" },
    { code: "SAR", name: "Saran" },
    { code: "SHE", name: "Sheikhpura" },
    { code: "SIO", name: "Sitamarhi" },
    { code: "SUP", name: "Supaul" },
    { code: "VAI", name: "Vaishali" },
    { code: "WCH", name: "West Champaran" }
  ],
  CG: [
    { code: "BAL", name: "Balod" },
    { code: "BAK", name: "Baloda Bazar" },
    { code: "BALR", name: "Balrampur" },
    { code: "BAS", name: "Bastar" },
    { code: "BEM", name: "Bemetara" },
    { code: "BIJ", name: "Bijapur" },
    { code: "BIL", name: "Bilaspur" },
    { code: "DAN", name: "Dantewada" },
    { code: "DHAM", name: "Dhamtari" },
    { code: "DURG", name: "Durg" },
    { code: "GARI", name: "Gariaband" },
    { code: "JAN", name: "Janjgir-Champa" },
    { code: "JAS", name: "Jashpur" },
    { code: "KABE", name: "Kabirdham" },
    { code: "KANK", name: "Kanker" },
    { code: "KOND", name: "Kondagaon" },
    { code: "KOR", name: "Korba" },
    { code: "KORE", name: "Koriya" },
    { code: "MAH", name: "Mahasamund" },
    { code: "MUNG", name: "Mungeli" },
    { code: "NARA", name: "Narayanpur" },
    { code: "RAIG", name: "Raigarh" },
    { code: "RAIP", name: "Raipur" },
    { code: "RAJN", name: "Rajnandgaon" },
    { code: "SUK", name: "Sukma" },
    { code: "SURG", name: "Surguja" },
    { code: "SURA", name: "Surajpur" }
  ],
  DD: [
    { code: "DAM", name: "Daman" },
    { code: "DIU", name: "Diu" }
  ],
  DL: [
    { code: "NDT", name: "North Delhi" },
    { code: "SDT", name: "South Delhi" },
    { code: "EDT", name: "East Delhi" },
    { code: "WDT", name: "West Delhi" },
    { code: "CEN", name: "Central Delhi" },
    { code: "NDW", name: "Northwest Delhi" },
    { code: "SWT", name: "Southwest Delhi" },
    { code: "NDT", name: "Northeast Delhi" },
    { code: "SHT", name: "Southeast Delhi" }
  ],
  GA: [
    { code: "NGA", name: "North Goa" },
    { code: "SGA", name: "South Goa" }
  ],
  GJ: [
    { code: "AHM", name: "Ahmedabad" },
    { code: "AMR", name: "Amreli" },
    { code: "ANA", name: "Anand" },
    { code: "ARA", name: "Aravalli" },
    { code: "BAN", name: "Banaskantha" },
    { code: "BHA", name: "Bharuch" },
    { code: "BHV", name: "Bhavnagar" },
    { code: "BOT", name: "Botad" },
    { code: "CHH", name: "Chhota Udaipur" },
    { code: "DAH", name: "Dahod" },
    { code: "DAN", name: "Dang" },
    { code: "DEV", name: "Devbhoomi Dwarka" },
    { code: "GIR", name: "Gir Somnath" },
    { code: "GAND", name: "Gandhinagar" },
    { code: "JAM", name: "Jamnagar" },
    { code: "JUN", name: "Junagadh" },
    { code: "KAC", name: "Kachchh" },
    { code: "KHEDA", name: "Kheda" },
    { code: "MAH", name: "Mahisagar" },
    { code: "MEH", name: "Mehsana" },
    { code: "MOD", name: "Morbi" },
    { code: "NAR", name: "Narmada" },
    { code: "NAV", name: "Navsari" },
    { code: "PAT", name: "Patan" },
    { code: "POR", name: "Porbandar" },
    { code: "RAJ", name: "Rajkot" },
    { code: "SAB", name: "Sabarkantha" },
    { code: "SUR", name: "Surat" },
    { code: "SURE", name: "Surendranagar" },
    { code: "TAP", name: "Tapi" },
    { code: "VAL", name: "Valsad" },
    { code: "VAD", name: "Vadodara" }
  ],
  HR: [
    { code: "AMB", name: "Ambala" },
    { code: "BHI", name: "Bhiwani" },
    { code: "CHA", name: "Charkhi Dadri" },
    { code: "FAR", name: "Faridabad" },
    { code: "FAT", name: "Fatehabad" },
    { code: "GUR", name: "Gurugram" },
    { code: "HIS", name: "Hisar" },
    { code: "JHA", name: "Jhajjar" },
    { code: "JIN", name: "Jind" },
    { code: "KAI", name: "Kaithal" },
    { code: "KAR", name: "Karnal" },
    { code: "KUR", name: "Kurukshetra" },
    { code: "MAH", name: "Mahendragarh" },
    { code: "NUH", name: "Nuh" },
    { code: "PAN", name: "Panchkula" },
    { code: "PAL", name: "Palwal" },
    { code: "REW", name: "Rewari" },
    { code: "ROH", name: "Rohtak" },
    { code: "SIR", name: "Sirsa" },
    { code: "SON", name: "Sonipat" },
    { code: "YAM", name: "Yamunanagar" }
  ],
  HP: [
    { code: "BIL", name: "Bilaspur" },
    { code: "CHI", name: "Chamba" },
    { code: "HAM", name: "Hamirpur" },
    { code: "KAN", name: "Kangra" },
    { code: "KIN", name: "Kinnaur" },
    { code: "KUL", name: "Kullu" },
    { code: "LAH", name: "Lahaul and Spiti" },
    { code: "MAN", name: "Mandi" },
    { code: "SHI", name: "Shimla" },
    { code: "SOL", name: "Solan" },
    { code: "SIR", name: "Sirmaur" },
    { code: "UNA", name: "Una" }
  ],
  JK: [
    { code: "ANH", name: "Anantnag" },
    { code: "BUD", name: "Budgam" },
    { code: "BLA", name: "Bandipora" },
    { code: "BAR", name: "Baramulla" },
    { code: "DOD", name: "Doda" },
    { code: "GAN", name: "Ganderbal" },
    { code: "JAM", name: "Jammu" },
    { code: "KAT", name: "Kathua" },
    { code: "KUL", name: "Kulgam" },
    { code: "KUP", name: "Kupwara" },
    { code: "POO", name: "Poonch" },
    { code: "PUL", name: "Pulwama" },
    { code: "RAJ", name: "Rajouri" },
    { code: "RAM", name: "Ramban" },
    { code: "REW", name: "Reasi" },
    { code: "SAM", name: "Samba" },
    { code: "SHOP", name: "Shopian" },
    { code: "SRG", name: "Srinagar" },
    { code: "UDH", name: "Udhampur" }
  ],
  JH: [
    { code: "BOK", name: "Bokaro" },
    { code: "CHA", name: "Chatra" },
    { code: "DEO", name: "Deoghar" },
    { code: "DHN", name: "Dhanbad" },
    { code: "DUM", name: "Dumka" },
    { code: "EGR", name: "East Singhbhum" },
    { code: "GAR", name: "Garhwa" },
    { code: "GIR", name: "Giridih" },
    { code: "GOD", name: "Godda" },
    { code: "GUH", name: "Gumla" },
    { code: "HAZ", name: "Hazaribagh" },
    { code: "JAM", name: "Jamtara" },
    { code: "KOD", name: "Kodarma" },
    { code: "LAT", name: "Latehar" },
    { code: "LOH", name: "Lohardaga" },
    { code: "PAK", name: "Pakur" },
    { code: "PAL", name: "Palamu" },
    { code: "RAM", name: "Ramgarh" },
    { code: "SAH", name: "Sahibganj" },
    { code: "SIM", name: "Simdega" },
    { code: "SRE", name: "Seraikela Kharsawan" },
    { code: "WGR", name: "West Singhbhum" }
  ],
  KA: [
    { code: "BAG", name: "Bagalkot" },
    { code: "BLR", name: "Bangalore Urban" },
    { code: "BGR", name: "Bangalore Rural" },
    { code: "BEL", name: "Belgaum" },
    { code: "BID", name: "Bidar" },
    { code: "CHT", name: "Chikkaballapur" },
    { code: "CHK", name: "Chikkamagaluru" },
    { code: "CHI", name: "Chitradurga" },
    { code: "DAK", name: "Dakshina Kannada" },
    { code: "DAV", name: "Davanagere" },
    { code: "DHA", name: "Dharwad" },
    { code: "GAD", name: "Gadag" },
    { code: "GUL", name: "Gulbarga" },
    { code: "HASS", name: "Hassan" },
    { code: "HAV", name: "Haveri" },
    { code: "KOD", name: "Kodagu" },
    { code: "KOP", name: "Koppal" },
    { code: "MAN", name: "Mandya" },
    { code: "MYR", name: "Mysore" },
    { code: "RAI", name: "Raichur" },
    { code: "RAM", name: "Ramanagara" },
    { code: "SHI", name: "Shimoga" },
    { code: "TUM", name: "Tumkur" },
    { code: "UDU", name: "Udupi" },
    { code: "UTK", name: "Uttara Kannada" },
    { code: "VIR", name: "Vijayapura" },
    { code: "YAD", name: "Yadgir" }
  ],
  KL: [
    { code: "TVM", name: "Thiruvananthapuram" },
    { code: "EKM", name: "Ernakulam" },
    { code: "KTM", name: "Kottayam" },
    { code: "KNR", name: "Kannur" },
    { code: "IDK", name: "Idukki" }
  ],
  LD: [
    { code: "KAV", name: "Kavaratti" }
  ],
  MP: [
    { code: "IND", name: "Indore" },
    { code: "BPL", name: "Bhopal" },
    { code: "GW", name: "Gwalior" },
    { code: "JBP", name: "Jabalpur" },
    { code: "RWL", name: "Rewa" }
  ],
  MH: [
    { code: "MUM", name: "Mumbai" },
    { code: "PUN", name: "Pune" },
    { code: "NAS", name: "Nashik" },
    { code: "NAG", name: "Nagpur" },
    { code: "AUR", name: "Aurangabad" }
  ],
  MN: [
    { code: "IMP", name: "Imphal East" },
    { code: "IMPW", name: "Imphal West" },
    { code: "TAM", name: "Tamenglong" }
  ],
  ML: [
    { code: "EKH", name: "East Khasi Hills" },
    { code: "WKH", name: "West Khasi Hills" },
    { code: "JTH", name: "Jaintia Hills" }
  ],
  MZ: [
    { code: "AIZ", name: "Aizawl" },
    { code: "LUN", name: "Lunglei" },
    { code: "KOL", name: "Kolasib" }
  ],
  NL: [
    { code: "KOH", name: "Kohima" },
    { code: "DIM", name: "Dimapur" },
    { code: "MON", name: "Mon" }
  ],
  OR: [
    { code: "BBS", name: "Bhubaneswar" },
    { code: "CUT", name: "Cuttack" },
    { code: "GAN", name: "Ganjam" },
    { code: "BAL", name: "Balangir" }
  ],
  PY: [
    { code: "PUD", name: "Puducherry" },
    { code: "KAR", name: "Karaikal" },
    { code: "MAH", name: "Mahe" }
  ],
  PB: [
    { code: "AMR", name: "Amritsar" },
    { code: "JAL", name: "Jalandhar" },
    { code: "LUD", name: "Ludhiana" },
    { code: "PAT", name: "Patiala" }
  ],
  RJ: [
    { code: "JPR", name: "Jaipur" },
    { code: "JOD", name: "Jodhpur" },
    { code: "UDA", name: "Udaipur" },
    { code: "BIK", name: "Bikaner" },
    { code: "KOT", name: "Kota" }
  ],
  SK: [
    { code: "GAN", name: "Gangtok" },
    { code: "NAM", name: "Namchi" },
    { code: "MNG", name: "Mangan" }
  ],
  TN: [
    { code: "CHN", name: "Chennai" },
    { code: "MDU", name: "Madurai" },
    { code: "CBE", name: "Coimbatore" },
    { code: "TRL", name: "Tirunelveli" },
    { code: "VEL", name: "Vellore" }
  ],
  TS: [
    { code: "HYD", name: "Hyderabad" },
    { code: "WRG", name: "Warangal" },
    { code: "NZB", name: "Nizamabad" },
    { code: "KHM", name: "Khammam" }
  ],
  TR: [
    { code: "AGT", name: "Agartala" },
    { code: "DHL", name: "Dhalai" },
    { code: "KHW", name: "Khowai" }
  ],
  UP: [
    { code: "LKO", name: "Lucknow" },
    { code: "KAN", name: "Kanpur" },
    { code: "VAR", name: "Varanasi" },
    { code: "AGR", name: "Agra" },
    { code: "ALD", name: "Prayagraj" }
  ],
  UK: [
    { code: "DEH", name: "Dehradun" },
    { code: "NAI", name: "Nainital" },
    { code: "HAR", name: "Haridwar" },
    { code: "PAU", name: "Pauri Garhwal" }
  ],
  // ... Additional states/UTs continue similarly ...

  WB: [
    { code: "ALI", name: "Alipurduar" },
    { code: "BAN", name: "Bankura" },
    { code: "BAR", name: "Baruipur" },
    { code: "BIR", name: "Birbhum" },
    { code: "COO", name: "Cooch Behar" },
    { code: "DAR", name: "Darjeeling" },
    { code: "DINA", name: "Dakshin Dinajpur" },
    { code: "HOW", name: "Howrah" },
    { code: "HOO", name: "Hooghly" },
    { code: "JAL", name: "Jalpaiguri" },
    { code: "JHA", name: "Jhargram" },
    { code: "KOL", name: "Kolkata" },
    { code: "MAL", name: "Malda" },
    { code: "MUR", name: "Murshidabad" },
    { code: "NAD", name: "Nadia" },
    { code: "NPG", name: "North 24 Parganas" },
    { code: "PUR", name: "Purba Medinipur" },
    { code: "PAS", name: "Paschim Medinipur" },
    { code: "S24", name: "South 24 Parganas" },
    { code: "UDA", name: "Uttar Dinajpur" }
  ]
};
const courtsData = {
  ALP: [
    { name: "District Court Alipurduar", code: "DCA" },
  ],
  BAN: [
    { name: "District Court Barasat", code: "DCB" },
    { name: "Subdivisional Court Bongaon", code: "SCB" },
  ],
  BIR: [
    { name: "District Court Suri", code: "DCS" },
    { name: "Subdivisional Court Rampurhat", code: "SCR" },
  ],
  COO: [
    { name: "District Court Cooch Behar", code: "DCC" },
  ],
  DAR: [
    { name: "District and Sessions Court Darjeeling", code: "DSD" },
    { name: "Additional District Court Siliguri", code: "ADS" },
  ],
  HOW: [
    { name: "District Court Howrah", code: "DCH" },
    { name: "Civil Judge Court Howrah", code: "CJH" },
  ],
  HOO: [
    { name: "District Court Hooghly", code: "DCHG" },
    { name: "Sessions Court Chinsurah", code: "SCC" },
  ],
  JAL: [
    { name: "District Court Jalpaiguri", code: "DCJ" },
    { name: "Malbazar Subdivisional Court", code: "MSC" },
  ],
  KOL: [
    { name: "Calcutta High Court", code: "CHC" },
    { name: "City Civil Court Kolkata", code: "CCC" },
    { name: "Bankshall Court Kolkata", code: "BCC" },
  ],
  MID: [
    { name: "District Court Tamluk", code: "DCT" },
    { name: "Subdivisional Court Contai", code: "SCC" },
  ],
  NAD: [
    { name: "District Court Krishnanagar", code: "DCK" },
    { name: "Subdivisional Court Kalyani", code: "SCK" },
  ],
  PAS: [
    { name: "District Court Asansol", code: "DCA" },
    { name: "Subdivisional Court Durgapur", code: "SCD" },
  ],
  PUR: [
    { name: "District Court Purulia", code: "DCP" },
  ],
  MUR: [
    { name: "District Court Berhampore", code: "DCB" },
  ],
  RAJ: [
    { name: "District Court Raiganj", code: "DCR" },
  ]
};
const lawyersData = {
  DCA: [
    { name: "John Doe", tag: "criminal" },
    { name: "Jane Smith", tag: "civil" },
    { name: "Michael Johnson", tag: "family" },
    { name: "Sarah Davis", tag: "labor" },
    { name: "David Lee", tag: "property" }
  ],
  DCB: [
    { name: "Samuel King", tag: "criminal" },
    { name: "Alice Walker", tag: "civil" },
    { name: "Robert Clark", tag: "family" },
    { name: "Emma White", tag: "property" },
    { name: "Jack Green", tag: "labor" }
  ],
  DCS: [
    { name: "Miriam Wagner", tag: "criminal" },
    { name: "Bradley Wilkerson", tag: "civil" },
    { name: "Olivia Martinez", tag: "family" },
    { name: "Daniel Brown", tag: "property" },
    { name: "Sophia Harris", tag: "labor" }
  ],
  DCC: [
    { name: "Carlos Abbott", tag: "criminal" },
    { name: "Victoria Knight", tag: "civil" },
    { name: "Benjamin Taylor", tag: "family" },
    { name: "Sophia Thomas", tag: "property" },
    { name: "James White", tag: "labor" }
  ],
  DSD: [
    { name: "Louis Franco", tag: "criminal" },
    { name: "Julia Green", tag: "civil" },
    { name: "William Clark", tag: "family" },
    { name: "Nancy Jones", tag: "property" },
    { name: "Emma Foster", tag: "labor" }
  ],
  ADS: [
    { name: "George Sanders", tag: "criminal" },
    { name: "Victoria Lewis", tag: "civil" },
    { name: "Edward Johnson", tag: "family" },
    { name: "Emily Robinson", tag: "property" },
    { name: "William Scott", tag: "labor" }
  ],
  DCH: [
    { name: "Matthew Davis", tag: "criminal" },
    { name: "Amelia Clark", tag: "civil" },
    { name: "Ethan Miller", tag: "family" },
    { name: "Natalie Carter", tag: "property" },
    { name: "Daniel Garcia", tag: "labor" }
  ],
  CJH: [
    { name: "Sophie Taylor", tag: "criminal" },
    { name: "Benjamin Harris", tag: "civil" },
    { name: "Grace Moore", tag: "family" },
    { name: "Lucas Perez", tag: "property" },
    { name: "Joseph Roberts", tag: "labor" }
  ],
  SCC: [
    { name: "Christopher Evans", tag: "criminal" },
    { name: "Isabella Ward", tag: "civil" },
    { name: "Henry Martin", tag: "family" },
    { name: "Olivia Wilson", tag: "property" },
    { name: "Liam Thompson", tag: "labor" }
  ],
  DCHG: [
    { name: "David Knight", tag: "criminal" },
    { name: "Samantha Anderson", tag: "civil" },
    { name: "Oliver Scott", tag: "family" },
    { name: "Sophia Williams", tag: "property" },
    { name: "Eva Moore", tag: "labor" }
  ],
  SCD: [
    { name: "Jessica Lee", tag: "criminal" },
    { name: "Kyle Carter", tag: "civil" },
    { name: "Fiona Garcia", tag: "family" },
    { name: "Grace Lee", tag: "property" },
    { name: "Edward Harris", tag: "labor" }
  ],
  DCJ: [
    { name: "Linda King", tag: "criminal" },
    { name: "Anthony Wright", tag: "civil" },
    { name: "Jasmine Green", tag: "family" },
    { name: "Josephine Clark", tag: "property" },
    { name: "Matthew White", tag: "labor" }
  ],
  MSC: [
    { name: "Oscar Jones", tag: "criminal" },
    { name: "Linda Martinez", tag: "civil" },
    { name: "Daniel Thompson", tag: "family" },
    { name: "Miriam Green", tag: "property" },
    { name: "Henry White", tag: "labor" }
  ],
  CHC: [
    { name: "Van Henry", tag: "criminal" },
    { name: "Carlos Abbott", tag: "civil" },
    { name: "Miriam Wagner", tag: "family" },
    { name: "Bradley Wilkerson", tag: "property" },
    { name: "Virginia Andrews", tag: "labor" }
  ],
  CCC: [
    { name: "Kelly Snyder", tag: "criminal" },
    { name: "Sophie Taylor", tag: "civil" },
    { name: "George Sanders", tag: "family" },
    { name: "Emily Robinson", tag: "property" },
    { name: "Joseph Roberts", tag: "labor" }
  ],
  BCC: [
    { name: "Carlos Abbott", tag: "criminal" },
    { name: "Victoria Knight", tag: "civil" },
    { name: "Benjamin Taylor", tag: "family" },
    { name: "Sophia Thomas", tag: "property" },
    { name: "James White", tag: "labor" }
  ],
  DCT: [
    { name: "Samuel King", tag: "criminal" },
    { name: "Alice Walker", tag: "civil" },
    { name: "Robert Clark", tag: "family" },
    { name: "Emma White", tag: "property" },
    { name: "Jack Green", tag: "labor" }
  ],
  SCR: [
    { name: "Michael Johnson", tag: "criminal" },
    { name: "Sarah Davis", tag: "civil" },
    { name: "David Lee", tag: "family" },
    { name: "John Doe", tag: "property" },
    { name: "Jane Smith", tag: "labor" }
  ],
  DCK: [
    { name: "Louis Franco", tag: "criminal" },
    { name: "Julia Green", tag: "civil" },
    { name: "William Clark", tag: "family" },
    { name: "Nancy Jones", tag: "property" },
    { name: "Emma Foster", tag: "labor" }
  ]
};









export function PetitionFiling() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedLawyers, setSelectedLawyers] = useState([]);
  const [availableDistricts, setAvailableDistricts] = useState([]);
  const [availableCourts, setAvailableCourts] = useState([]);
  const [availableLawyers, setAvailableLawyers] = useState([]);

  // Handle state selection
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setAvailableDistricts(districtsData[state] || []);
    setSelectedDistrict("");
    setAvailableCourts([]);
    setSelectedCourt("");
    setAvailableLawyers([]);
    setSelectedLawyers([]);
  };

  // Handle district selection
  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setAvailableCourts(courtsData[district] || []);
    setSelectedCourt("");
    setAvailableLawyers([]);
    setSelectedLawyers([]);
  };

  // Handle court complex selection
  const handleCourtChange = (event) => {
    const courtCode = event.target.value;
    setSelectedCourt(courtCode);
    setAvailableLawyers(lawyersData[courtCode] || []);
    setSelectedLawyers([]);
  };

  // Handle lawyer selection
  const handleLawyerChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLawyers(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };



  return (
    <>
      <form className="w-3/5 m-auto border-2 shadow-2xl p-6 rounded-xl">
        <h1 className="font-bold text-2xl">File Petititon: </h1>
        <div className="py-12 grid grid-cols-2 justify-center justify-items-center gap-12">
          {/* select state section  */}
          <div className="text-left">
            <h1>Select State</h1>
            <TextField
              id="outlined-select-states"
              select
              defaultValue="WB"
              value={selectedState}
              onChange={handleStateChange}
              helperText="Please select your state"
            >
              {states.map((state) => (
                <MenuItem key={state.code} value={state.code}>
                  {state.name}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* Select district selection field  */}
          <div className="text-left justify-self-center">
            <h1>Select District</h1>
            <TextField
              id="outlined-select-states"
              select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!availableDistricts.length}
              helperText="Please select your state"
            >
              {availableDistricts.map((district) => (
                <MenuItem key={district.code} value={district.code}>
                  {district.name}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* select court complex selection field  */}
          <div className="text-left">
            <h1>Select Court Complex</h1>
            <TextField
              id="outlined-select-states"
              select
              value={selectedCourt}
              onChange={handleCourtChange}
              disabled={!availableCourts.length}
              helperText="Please select your state"
            >
              {availableCourts.map((court) => (
                <MenuItem key={court.code} value={court.code}>
                  {court.name}
                </MenuItem>
              ))}
            </TextField>
          </div>


          {/* Multiple select lawyers */}
          <div>
            <FormControl sx={{ width: 250 }}>
              <h1 className="text-left">Select Your Lawyers</h1>
              <Select
                multiple
                value={selectedLawyers}
                onChange={handleLawyerChange}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((lawyer) => (
                      <Chip key={lawyer} label={lawyer} />
                    ))}
                  </Box>
                )}
                disabled={!availableLawyers.length}
              >
                {availableLawyers.map((lawyer) => (
                  <MenuItem key={lawyer.name} value={lawyer.name}>
                    {lawyer.name} <p className="mr-9 bg-gray-200 text-black font-thin p-1 rounded-md text-xs">{lawyer.tag}</p>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Upload petition file & extra document button  */}
        <div className="p-5 grid grid-cols-2 justify-center justify-items-center">
          <label for="uploadPetition">Upload petition File(pdf format)</label>
          <label for='uploadDocument'>Upload Supporting File(pdf format)</label>
          <Button

            component="label"
            variant="outlined"
            name="uploadPetition"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Petition files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>

          <Button
            component="label"
            name="uploadDocument"
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Documents
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </div>

        {/* from submission button  */}
        <div className="grid w-40 gap-5 justify-self-center">
          <Button variant="contained" endIcon={<VerifiedIcon />}>e-Verify</Button>

          <Button variant="contained" disabled>
            Submit Petition
          </Button>
        </div>
      </form>

    </>
  );
}
