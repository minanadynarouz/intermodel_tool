import containerImage from '../assets/Container -12.png';
import portImage from '../assets/port.svg';
import click from '../assets/pay-per-click-svgrepo-com.svg';
import FormSection from "../FormSection/FormSection";
import FormsWrapper from '../FormsWrapper/FormsWrapper';
import './containerDetails.css'

export default function ContainerDetails() {
  const containerFormFields = [
    { label: "Container Type", name: "containerType", type: "select", options: ["Select...", "20FT", "40FT", "20RF", "40RF"] },
    { label: "Weight", name: "weight", type: "number", placeholder: "0.0" },
    { label: "Quantity", name: "quantity", type: "number", placeholder: "0" },
    { label: "SOC", name: "soc", type: "select", options: ["Select...", "Yes", "No"] },
  ];

  const portFormFields = [
    { label: "POL/POD", name: "port_name", type: "select", options: ["Select...", "..."] },
    { label: "POR/FPD", name: "final_port_name", type: "select", options: ["Select...", "20FT", "40FT", "20RF", "40RF"] },
    { label: "Mode of Transport", name: "mode_of_transport", type: "select", options: ["Select...", "..."] },
    { label: "Comment", name: "comment", type: "textarea" },
    { label: "Ultimate Owner (UO)", name: "ultimate_owner", type: "text" },
  ];

  const submitarea = [
    { label: "Get Quotation Rate", name: "quotation", type: "button" },
    { label: "Offer to Customer", name: "offer_to_customer", type: "button" },
    { label: "Rate", name: "rate", type: "text" },
  ];

  return (
    <>
      <FormsWrapper
        imgUrl={containerImage}
        imgAlt={"Container"}
        FormItSelf={FormSection}
        formFields={containerFormFields}
      />

      <FormsWrapper
        imgUrl={portImage}
        imgAlt={"Port Image"}
        FormItSelf={FormSection}
        formFields={portFormFields}
      />

      <hr class="style13" />
      <FormsWrapper
        imgUrl={click}
        imgAlt={"click"}
        FormItSelf={FormSection}
        formFields={submitarea}
      />
    </>
  );
}
