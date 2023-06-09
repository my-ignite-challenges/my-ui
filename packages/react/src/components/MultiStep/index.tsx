import { Label, MultiStepContainer, Step, Steps } from "./styles";

export type MultiStepProps = {
  length: number;
  currentStep?: number;
};

export function MultiStep({ length, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {length}
      </Label>

      <Steps css={{ "--steps-length": length }}>
        {Array.from({ length }, (_, index) => index + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = "MultiStep";
