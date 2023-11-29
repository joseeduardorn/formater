document.addEventListener('DOMContentLoaded', () => {
    const jsonFormatButton = document.getElementById('jsonFormatButton');
    const xmlFormatButton = document.getElementById('xmlFormatButton');
    const sqlFormatButton = document.getElementById('sqlFormatButton');
  
    jsonFormatButton.addEventListener('click', () => {
      const jsonInput = document.getElementById('jsonInput').value;
      try {
        const formattedJSON = JSON.stringify(JSON.parse(jsonInput), null, 2);
        document.getElementById('jsonInput').value = formattedJSON;
      } catch (error) {
        console.error('Invalid JSON');
      }
    });
  
    xmlFormatButton.addEventListener('click', () => {
    const xmlInput = document.getElementById('xmlInput').value;
      try {
        // Parsing the input string as XML using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlInput, 'text/xml');
    
        // Serialize the parsed XML document back to a formatted string
        const serializedXml = new XMLSerializer().serializeToString(xmlDoc);
    
        document.getElementById('xmlInput').innerText = serializedXml;
      } catch (error) {
        document.getElementById('xmlInput').innerText = 'Invalid XML format';
      }

    });
  
    sqlFormatButton.addEventListener('click', () => {
        const sqlInput = document.getElementById('sqlInput').value;
        try {
        // Using sql-formatter to format SQL queries
        const formattedSql = sqlFormatter.format(sqlInput);
    
        document.getElementById('sqlInput').innerText = formattedSql;
        } catch (error) {
            document.getElementById('sqlInput').innerText = 'Invalid SQL format';
        }
    });
  });
  
  

/*

document.getElementById('formatJsonBtn').addEventListener('click', function() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
      const formattedJSON = JSON.stringify(JSON.parse(jsonInput), null, 2);
      document.getElementById('jsonOutput').innerText = formattedJSON;
    } catch (error) {
      document.getElementById('jsonOutput').innerText = 'Invalid JSON format';
    }
  });
  
  document.getElementById('formatXmlBtn').addEventListener('click', function() {
    const xmlInput = document.getElementById('xmlInput').value;
    try {
        // Parsing the input string as XML using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlInput, 'text/xml');
    
        // Serialize the parsed XML document back to a formatted string
        const serializedXml = new XMLSerializer().serializeToString(xmlDoc);
    
        document.getElementById('xmlOutput').innerText = serializedXml;
      } catch (error) {
        document.getElementById('xmlOutput').innerText = 'Invalid XML format';
      }
    //document.getElementById('xmlOutput').innerText = xmlInput;
  });
  
  document.getElementById('formatSqlBtn').addEventListener('click', function() {
    const sqlInput = document.getElementById('sqlInput').value;
    try {
        // Using sql-formatter to format SQL queries
        const formattedSql = sqlFormatter.format(sqlInput);
    
        document.getElementById('sqlOutput').innerText = formattedSql;
      } catch (error) {
        document.getElementById('sqlOutput').innerText = 'Invalid SQL format';
      }
    //document.getElementById('sqlOutput').innerText = sqlInput;
  });
  */