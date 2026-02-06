// automation_test.js
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// Teste simples para validar ambiente
Deno.test("Exemplo de teste básico", () => {
  const resultado = 2 + 2;
  assertEquals(resultado, 4);
});
