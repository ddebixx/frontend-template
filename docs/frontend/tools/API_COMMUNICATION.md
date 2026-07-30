# API communication

## HTTP

Use **Tanstack Query** via an encapsulated client in `src/services/[api-name]/client/`.

- Interceptors for auth / error normalization
- UI never constructs raw Tanstack Query instances

## Validation

Validate responses with **Zod**.

- Schemas in `src/services/[api-name]/schemas/`
- Derive types with `z.infer<typeof Schema>`
- Don’t trust API shapes at runtime without parsing
