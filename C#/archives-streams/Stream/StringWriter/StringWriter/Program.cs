string textReaderText = @"Uma cadeia de caracteres é um objeto do tipo String cujo valor é texto. +
                    Internamente, o texto é armazenado como uma coleção sequencial somente leitura de objetos Char. 
                    Não há nenhum caractere de terminação nula no final de uma cadeia de caracteres C#; 
                    portanto, uma cadeia de caracteres C# pode conter qualquer número de caracteres nulos inseridos. 
                    A propriedade Char de uma cadeia de caracteres representa o número de objetos Length que ela contém e 
                    não o número de caracteres Unicode. 
                    Para acessar os pontos de código Unicode individuais em uma cadeia de caracteres, 
                    use o objeto StringInfo.";

Console.WriteLine($"TExto original: {textReaderText}");
string linha, paragrafo = null;
var sr = new StringReader(textReaderText);

while(true)
{
    linha = sr.ReadLine();
    if(linha != null)
    {
        paragrafo += linha + " ";
    }
    else
    {
        paragrafo += '\n';
        break;
    }
}

Console.WriteLine($"Texto modificado: {paragrafo}");
int caractereLido;
char caractereConvertido;

var sw = new StringWriter();
sr = new StringReader(paragrafo);

while (true)
{
    caractereLido = sr.Read();
    if (caractereLido == -1) break;
    caractereConvertido = Convert.ToChar(caractereLido);

    if(caractereConvertido == '.')
    {
        sw.Write("\n\n");

        sr.Read();
        sr.Read();
    }
    else
    {
        sw.Write(caractereConvertido);
    }
}

Console.WriteLine($"texto armazenado no StringWriter: {sw.ToString()}");