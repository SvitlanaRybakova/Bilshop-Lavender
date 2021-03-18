import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [firstName, setFirstName] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState("");

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const [emailAddress, setEmailAddress] = useState("");

  const onChangeEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const [townCity, setTownCity] = useState("");

  const onChangeTownCity = (e) => {
    setTownCity(e.target.value);
  };

  const [postcodeZIP, setPostcodeZIP] = useState("");

  const onChangePostcodeZIP = (e) => {
    setPostcodeZIP(e.target.value);
  };

  const [streetAddress, setStreetAddress] = useState("");

  const onChangeStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };

  const [phone, setPhone] = useState("");

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const [password, setPassword] = useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const [userData, setUserData] = useState({});

  const [userOrders, setUserOrders] = useState({
    userId: 1,
    orderHistory: [],
    firstname: "",
    lastname: "",
  });
  const history = useHistory();

  const [userOrderHistoryBoolean, setUserOrderHistoryBoolean] = useState(false);

  const addUserDataToContext = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    if (localStorage.getItem("orders") !== null) {
      setUserOrders(JSON.parse(localStorage.getItem("orders")));
    }
  }, []);

  const orderHistory = (purchases) => {
    setUserOrders((previousState) => ({
      orderHistory: [...previousState.orderHistory, purchases],
    }));
    setUserOrderHistoryBoolean(true);
  };

  useEffect(() => {
    if (userOrderHistoryBoolean === true) {
      localStorage.setItem("orders", JSON.stringify(userOrders));
      setUserOrderHistoryBoolean(false);
      history.push("/shopping-cart/checkout/confirmation");
    }
  }, [userOrderHistoryBoolean]);

  // if (ConfirmPassword !=== password)

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      townCity: townCity,
      postcodeZIP: postcodeZIP,
      streetAddress: streetAddress,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    history.push("/");
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setTownCity("");
    setPostcodeZIP("");
    setStreetAddress("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setLogedIn(true);
  };

  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {}, [logedIn]);

  const logOut = () => {
    setLogedIn(false);
  };

  const values = {
    userData,
    addUserDataToContext,
    userOrders,
    setUserOrders,
    orderHistory,
    onSubmit,
    firstName,
    onChangeFirstName,
    lastName,
    onChangeLastName,
    emailAddress,
    onChangeEmailAddress,
    townCity,
    onChangeTownCity,
    postcodeZIP,
    onChangePostcodeZIP,
    streetAddress,
    onChangeStreetAddress,
    phone,
    onChangePhone,
    password,
    onChangePassword,
    confirmPassword,
    onChangeConfirmPassword,
    logedIn,
    logOut,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;
