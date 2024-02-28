using System.IO;
using System;
using static System.Console;

WriteLine("Digite o nome do arquivo:");
var nome = ReadLine();

LimparNome(nome);

var path = Environment.CurrentDirectory + $"\\{nome}.txt";

CriarArquivo(path);

WriteLine("Digite enter para finalizar...");
ReadLine();

static string LimparNome(string nome)
{
    foreach (var @char in Path.GetInvalidFileNameChars())
    {
        nome = nome.Relace(@char, '-');
    }
}

static void CriarArquivo(string path)
{
    try
    {
        using var sw = File.CreateText(path);

        sw.WriteLine("Teste de escrita 1.");
        sw.WriteLine("Teste de escrita 2.");
        sw.WriteLine("Teste de escrita 3.");
    }
    catch (System.Exception)
    {
        WriteLine("Erro ao salvar o nome do arquvivo.");
    }

}
// sw.Flush();