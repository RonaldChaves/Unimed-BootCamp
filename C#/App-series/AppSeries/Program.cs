using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static System.Console;
using src.AppSeries.Enum;

namespace AppSeries
{
    public class Program
    {
        static SerieRepositorio repositorio = new SerieRepositorio();
        static void Main(string[] args)
        {
            string opcaoUsuario = ObterOpcaoUsusario();

            while (opcaoUsuario.ToUpper() != "X")
            {
                switch (opcaoUsuario)
                {
                    case "1": ListaSeries(); break;
                    case "2": InserirSerie(); break;
                    case "3": AtualizarSerie(); break;
                    case "4": ExcluirSerie(); break;
                    case "5": VisualizarSerie(); break;
                    case "C": Clear(); break;
                    default: throw new ArgumentOutOfRangeException();
                }
                opcaoUsuario = ObterOpcaoUsusario();
            }
            WriteLine("Obrigado por utilizar nossos serviços.");
            ReadLine();
        }

        private static void ListaSeries()
        {
            WriteLine("Listar Series.");

            var lista = repositorio.Lista();

            if(lista.Count == 0)
            {
                WriteLine("Nenhuma Serie cadastrada.");
                return;
            }

            foreach (var serie in lista)
            {
                var excluido = serie.RetornaExcluido();
                WriteLine("#ID {0}: - {1} - {2}", serie.RetornaId(), serie.RetornaTitulo(), (excluido ? "Excluido" : ""));
            }
        }

        private static void InserirSerie()
        {
            WriteLine("Inserir nova serie");

            foreach (var i in Enum.GetValues(typeof(Genero)))
            {
                WriteLine("{0} - {1}", i, Enum.GetValues(typeof(Genero)), i);
            }
            Write("Digite o gênero entre as opções acima: ");
            int entradaGenero = int.Parse(ReadLine());

            Write("Digite o titulo da série: ");
            string entradaTitulo = (ReadLine());

            Write("Digite o Ano de Inicio da Serie: ");
            int entradaAno = int.Parse(ReadLine());

            Write("Digite a Descrição da Serie: ");
            string entradaDescricao = ReadLine();

            Serie novaSerie = new Serie(id: repositorio.ProximoId(),
            genero: (Genero)entradaGenero,
            titulo: entradaTitulo,
            ano: entradaAno,
            descricao: entradaDescricao);

            repositorio.Insere(novaSerie);
        }

        private static void AtualizarSerie()
        {
            Write("Digite o id da série: ");
            int indiceSerie = int.Parse(ReadLine());

            foreach (int i in Enum.GetValues(typeof(Genero)))
            {
                WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
            }
            Write("Digite o gênero entre as opções acima: ");
            int entradaGenero = int.Parse(ReadLine());

            Write("Digite o Título da Série: ");
            string entradaTitulo = ReadLine();

            Write("Digite o Ano de Início da Série: ");
            int entradaAno = int.Parse(ReadLine());

            Write("Digite a Descrição da Série: ");
            string entradaDescricao = ReadLine();

            Serie atualizaSerie = new Serie(id: indiceSerie,
                                        genero: (Genero)entradaGenero,
                                        titulo: entradaTitulo,
                                        ano: entradaAno,
                                        descricao: entradaDescricao);

            repositorio.Atualiza(indiceSerie, atualizaSerie);
        }

        private static void VisualizarSerie()
        {
            Console.Write("Digite o id da série: ");
            int indiceSerie = int.Parse(Console.ReadLine());

            var serie = repositorio.retornaPorId(indiceSerie);

            Console.WriteLine(serie);
        }

        private static void ExcluirSerie()
        {
            Write("Digite o id da série: ");
            int indiceSerie = int.Parse(ReadLine());

            repositorio.Exclui(indiceSerie);
        }

        public static string ObterOpcaoUsusario()
        {
            WriteLine("");
            WriteLine("AppSeries a seu dispor!!");
            WriteLine("Informe a opção desejada:");
            
            WriteLine("1- Listar Series");
            WriteLine("2- Inserir nova Serie");
            WriteLine("3- Atualizar Serie");
            WriteLine("4- Excluir Serie");
            WriteLine("5- Visualizar Serie");
            WriteLine("C- Limpar Tela");
            WriteLine("x- Sair");
            WriteLine("");

            string opcaoUsuario = ReadLine().ToUpper();
            WriteLine();
            return opcaoUsuario;

        }
    }
}