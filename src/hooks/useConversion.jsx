import { useState, useRef, useEffect } from "react";

const useConversion = () => {
  const [inputValues, setInputValues] = useState({
    fromValue: "",
    toValue: "",
  });

  const [types, setTypes] = useState({ from: "", to: "" });
  
  const baseValues = useRef({
    base: 1,
    shotok: 435.6,
    acre: 43560,
    katha: 718.74,
    bigha: 14374.8,
    kani: 17424,
    gonda: 871.2,
    kora: 217.8,
    kranti: 72,
    til: 3.6,
  });

  const calculateValue = (value, fromType, toType) => {
    if (!fromType || !toType || isNaN(value) || value === "") return "";
    const fromBase = baseValues.current[fromType];
    const toBase = baseValues.current[toType];
    return ((fromBase / toBase) * value).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    // Clear values if invalid or negative input
    if (isNaN(numericValue) || numericValue < 0) {
      setInputValues({ fromValue: "", toValue: "" });
      return;
    }

    // Update input values based on the changed field
    setInputValues((prev) => {
      const newValues =
        name === "fromValue"
          ? {
              fromValue: numericValue,
              toValue: calculateValue(numericValue, types.from, types.to),
            }
          : {
              fromValue: calculateValue(numericValue, types.to, types.from),
              toValue: numericValue,
            };
      return { ...prev, ...newValues };
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setTypes((prev) => ({ ...prev, [name]: value }));
  };

  // Update values when type selectors change
  useEffect(() => {
    setInputValues((prev) => ({
      ...prev,
      toValue: calculateValue(prev.fromValue, types.from, types.to),
    }));
  }, [types.to]);

  useEffect(() => {
    setInputValues((prev) => ({
      ...prev,
      fromValue: calculateValue(prev.toValue, types.to, types.from),
    }));
  }, [types.from]);

  return {
    inputValues,
    types,
    handleInputChange,
    handleSelectChange,
  };
};

export default useConversion;
