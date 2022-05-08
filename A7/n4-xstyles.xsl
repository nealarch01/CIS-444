<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Engine</th>
                        <th>Doors</th>
                        <th>Transmission</th>
                        <th>Accessories</th>
                    </tr>
                    <xsl:for-each select="catalog/car">
                    <tr>
                        <td style="padding: 15px;">
                            <xsl:value-of select="make" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="model" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="year" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="color" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="engine" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="number_of_doors" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="transmission_type" />
                        </td>
                        <td style="padding: 15px;">
                            <xsl:value-of select="accessories" />
                        </td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>