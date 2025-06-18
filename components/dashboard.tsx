"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function Dashboard() {
  const [totalBalance] = useState(125430.5)
  const [monthlyReturn] = useState(8.2)
  const [yearlyReturn] = useState(15.7)

  const investments = [
    {
      name: "S&P 500 ETF",
      symbol: "SPY",
      value: 45230.2,
      change: 2.3,
      percentage: 36.1,
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      value: 28450.8,
      change: -1.2,
      percentage: 22.7,
    },
    {
      name: "Microsoft Corp.",
      symbol: "MSFT",
      value: 22340.15,
      change: 3.1,
      percentage: 17.8,
    },
    {
      name: "Real Estate ETF",
      symbol: "VNQ",
      value: 18920.35,
      change: 0.8,
      percentage: 15.1,
    },
    {
      name: "Treasury Bonds",
      symbol: "TLT",
      value: 10489.0,
      change: -0.5,
      percentage: 8.3,
    },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Acompanhe seus investimentos em tempo real</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Investimento
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">+2.1% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retorno Mensal</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+{monthlyReturn}%</div>
            <p className="text-xs text-muted-foreground">
              ${((totalBalance * monthlyReturn) / 100).toLocaleString("en-US", { minimumFractionDigits: 2 })} este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retorno Anual</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">+{yearlyReturn}%</div>
            <p className="text-xs text-muted-foreground">Acima da média do mercado</p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Alocação da Carteira</CardTitle>
          <CardDescription>Distribuição dos seus investimentos por ativo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {investments.map((investment, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="font-medium">{investment.name}</div>
                  <div className="text-sm text-gray-500">{investment.symbol}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="font-medium">
                    ${investment.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-sm text-gray-500">{investment.percentage}%</div>
                </div>
                <Badge variant={investment.change >= 0 ? "default" : "destructive"} className="flex items-center gap-1">
                  {investment.change >= 0 ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {Math.abs(investment.change)}%
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Performance Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Performance dos Últimos 12 Meses</CardTitle>
          <CardDescription>Evolução do valor da sua carteira</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900">Gráfico de Performance</p>
              <p className="text-gray-600">Visualização dos dados em tempo real</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
