using Microsoft.AspNetCore.Mvc;

namespace AstronomicalCalculatorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AstronomicalController : ControllerBase
    {
        // Endpoint para conversão de unidades
        [HttpGet("converter-unidades")]
        public IActionResult ConverterUnidades([FromQuery] double anosLuz)
        {
            if (anosLuz < 0)
                return BadRequest("Anos-luz deve ser um valor positivo.");

            double km = anosLuz * 9.461e12;
            double ua = anosLuz * 63241;

            return Ok(new
            {
                AnosLuz = anosLuz,
                UnidadesAstronomicas = ua,
                Quilometros = km
            });
        }

        // Endpoint para cálculo de gravidade
        [HttpGet("calcular-gravidade")]
        public IActionResult CalcularGravidade([FromQuery] int planetaIndex, [FromQuery] double peso)
        {
            var planetas = new (string, double)[]
            {
                ("Mercúrio", 3.7),
                ("Vênus", 8.87),
                ("Terra", 9.8),
                ("Marte", 3.71),
                ("Júpiter", 24.79),
                ("Saturno", 10.44),
                ("Urano", 8.69),
                ("Netuno", 11.15)
            };

            if (planetaIndex < 0 || planetaIndex >= planetas.Length)
                return BadRequest("Planeta inválido.");
            if (peso <= 0)
                return BadRequest("Peso deve ser maior que zero.");

            double gravidade = planetas[planetaIndex].Item2;
            double pesoNoPlaneta = peso * (gravidade / 9.8);

            return Ok(new
            {
                Planeta = planetas[planetaIndex].Item1,
                PesoNoPlaneta = Math.Round(pesoNoPlaneta, 2)
            });
        }

        // Endpoint para listar planetas
        [HttpGet("planetas")]
        public IActionResult ListarPlanetas()
        {
            var planetas = new (string, double)[]
            {
                ("Mercúrio", 3.7),
                ("Vênus", 8.87),
                ("Terra", 9.8),
                ("Marte", 3.71),
                ("Júpiter", 24.79),
                ("Saturno", 10.44),
                ("Urano", 8.69),
                ("Netuno", 11.15)
            };

            return Ok(planetas.Select((p, i) => new { Index = i, Nome = p.Item1 }));
        }
    }
}