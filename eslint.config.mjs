import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		"rules": {
			// Adicione a linha abaixo para desativar a regra
			"@typescript-eslint/no-empty-object-type": "off"
			// Você pode ter outras regras aqui
		}
	}
];

export default eslintConfig;
