import type { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
  text: string;
}

export default function Lugar(props: Props) {
  return (
    <div class="flex justify-center py-4">
      <div>
        <p>{props.temperature?.celsius}°C</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
