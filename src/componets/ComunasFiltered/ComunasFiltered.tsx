import React from "react";
import { ComunasFilteredProps } from "./interface/IComunasFiltered";
import { InlineIcon } from "@iconify/react";
import baselineClose from "@iconify/icons-ic/baseline-close";

export const ComunasFiltered = ({
  comunas,
  setComuna,
}: ComunasFilteredProps) => {
  const deleteComuna = (e: any) => {
    const comunaClicked = e.target.textContent;
    const i = comunas.indexOf(comunaClicked);

    if (i !== -1) {
      comunas.splice(i, 1);
    }

    if (comunas.length > 0) {
      setComuna(`${comunas.join("-")}`);
    } else {
      setComuna("all");
    }
  };

  return (
    <div className="comunas-filtradas d-flex mb-2 mt-2 flex-wrap">
      {comunas.map((comuna: string, index: number) => {
        return (
          comuna !== "all" && (
            <div
              key={index}
              onClick={deleteComuna}
              className="item-comuna px-2"
              style={{
                borderRadius: "2px",
                background: "#3268AE",
                height: "20px",
                lineHeight: "17px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              <span
                className="mr-2"
                style={{ fontSize: "11px", fontWeight: 500, color: "#fff" }}
              >
                {comuna}
              </span>
              <InlineIcon
                icon={baselineClose}
                style={{ color: "#ffffff", fontSize: "12px" }}
              />
            </div>
          )
        );
      })}
    </div>
  );
};
