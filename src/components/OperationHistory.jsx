import React, { useContext } from "react";
import Card from "./Card";
import Text from "./Text";
import { CalculatorContext } from "../context/CalculatorContext";

export default function OperationHistory() {
  const { history } = useContext(CalculatorContext);

  return (
    <Card className="w-full py-10 px-8 bg-gray-600">
      <div className="text-white font-extrabold">
        <Text as="h1" variant="heading" className="mb-4">
          Histórico de Operações
        </Text>
        {history.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {history.map((value, index) => (
              <Text key={`item-${index}`} as="li">
                {value}
              </Text>
            ))}
          </ul>
        ) : (
          <Text as="p" variant="muted">
            Nenhuma operação recente
          </Text>
        )}
      </div>
    </Card>
  );
}
