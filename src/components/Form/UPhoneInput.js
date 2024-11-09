import { Form, Input } from "antd";
import PhoneInput from "antd-phone-input";
import { Controller } from "react-hook-form";

const UPhoneInput = ({
  name,
  label,
  defaultValue,
  disabled = false,
  labelStyles = {},
  className,
  suffix,
  style,
  defaultCountry,
}) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={
            Object.keys(labelStyles)?.length > 0 ? (
              <label style={labelStyles}>{label}</label>
            ) : (
              label
            )
          }
          validateStatus={error ? "error" : ""}
          help={error ? error.message : ""}
        >
          <PhoneInput
            placeholder="Enter phone number"
            enableSearch
            enableArrow={true}
            country={defaultCountry}
            {...field}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              height: "36px",
              border: "2px solid white",
            }}
          />
        </Form.Item>
      )}
    />
  );
};

export default UPhoneInput;
