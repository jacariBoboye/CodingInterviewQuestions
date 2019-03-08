  public int maxProfit(int k, int[] prices) {
        if(prices.length == 0){
            return 0;
        }
        
        // this solution can be easily modified to solve k transaction problem
        int transactions = k;
        
        // serives as a place holder to store the max possible profit for each sub problem
        // rows represents stock price and the cols represents the transactions.
        int[][] profitDP= new int[transactions + 1][prices.length];
        
        // assuming we dont have any starting balance
        int curBalance = 0;
        
        for(int i = 1; i<=transactions; i++){
            
            // since we cannot sell a stock before buying it so we can only buy the first day.
            curBalance = profitDP[i-1][0] - prices[0];
            
            for(int j=1; j<prices.length; j++){
                // if we choose to sell we need to decide we need to decide if the prev balance (profitDB[i][j-1]) was more 
                // of updated balance (prices[j] + curBalance) is more. Since we will get price[j] if we sell on j'th day/
                profitDP[i][j] = Math.max(profitDP[i][j - 1], prices[j] + curBalance);
                
                // if we choose to buy then we need to decide if the updated balance (profitDP[i-1][j] - price[j]) is more or
                // previous balance (curBalance) is more as we need to keep the buying cost to minimum
                curBalance = Math.max(curBalance, profitDP[i-1][j] - prices[j]);
            }
        }
        
        // max of each transactions
        return Math.max(profitDP[transactions][prices.length - 1], profitDP[transactions - 1][prices.length - 1]);
    }