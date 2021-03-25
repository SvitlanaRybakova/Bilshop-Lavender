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

  const [loginPassword, setLoginPassword] = useState("");

  const onChangeLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const [loginEmail, setLoginEmail] = useState("");

  const onChangeLoginEmail = (e) => {
    setLoginEmail(e.target.value);
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
    if (confirmPassword !== password) {
      alert("Both passwords must be the same");
      setPassword("");
      setConfirmPassword("");
    } else {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("logedIn", JSON.stringify(true));
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
    }

    console.log(
      firstName,
      lastName,
      emailAddress,
      townCity,
      postcodeZIP,
      streetAddress,
      phone
    );
  };

  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("logedIn") !== null) {
      if (JSON.parse(localStorage.getItem("logedIn")) === true) {
        setLogedIn(true);
      }
    }
  }, [logedIn]);

  const logOut = () => {
    localStorage.setItem("logedIn", false);
    setLogedIn(false);
    history.push("/");
  };

  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (userInfo !== "") {
      if (
        userInfo.password === loginPassword &&
        userInfo.emailAddress === loginEmail
      ) {
        setLogedIn(true);
        setLoginEmail("");
        setLoginPassword("");
        localStorage.setItem("logedIn", JSON.stringify(true));
        history.push("/");
      } else {
        alert("Password or Email invalid! Please try again");
        setLoginEmail("");
        setLoginPassword("");
      }
    }
  }, [userInfo]);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem("userInfo") !== null) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    } else {
      setLoginEmail("");
      setLoginPassword("");
      alert("Password or Email invalid! Please try again");
    }
  };

  const validateName = (value) => {
    return value
      .replace(/^\s*\d*/, "")
      .replace(/[0-9]/g, "")
      .replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase());
  };

  const validatePostcode = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/\d{1,3}/g)
        ?.join(" ")
        .substr(0, 6) || ""
    );
  };

  const validateStreetAdress = (value) => {
    return value
      .replace(/^\s*\d*/, "")
      .replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase());
  };

  const validatePhoneNumber = (value) => {
    if (value.length <= 7) {
      return (
        value
          .replace(/\-/g, "")
          .match(/\d{1,3}/g)
          ?.join("-")
          .substring(0, 7) || ""
      );
    } else {
      const groupByThreeString = value.substring(0, 7);
      let groupByTwoString = value.substring(7, value.length);
      const groups = groupByTwoString.replace(/\s/g, "").match(/\d{1,2}/g);
      if (groups === null) {
        groupByTwoString = "";
      } else {
        groupByTwoString = groups.join("-");
      }
      return (
        (groupByThreeString + "-" + groupByTwoString).substring(0, 13) || ""
      );
    }
  };

  const validateCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/\d{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

  const validateExpDate = (value) => {
    return (
      value
        .replace(/\//g, "")
        .match(/\d{1,2}/g)
        ?.join("/")
        .substr(0, 5) || ""
    );
  };

  const validateCVC = (value) => {
    return (
      value
        .match(/\d{1,3}/g)
        ?.join("")
        .substr(0, 3) || ""
    );
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
    onChangeLoginEmail,
    loginEmail,
    onChangeLoginPassword,
    loginPassword,
    onSubmitLogin,
    validateName,
    validatePostcode,
    validateCardNumber,
    validateExpDate,
    validateCVC,
    validateStreetAdress,
    validatePhoneNumber,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;
