<template>
    <div class="market-pairs">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm"><i class="icon ion-md-search"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Search" aria-describedby="inputGroup-sizing-sm">
          </div>
          <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#STAR" role="tab" aria-selected="true"><i
                  class="icon ion-md-star"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#BTC" role="tab" aria-selected="true">BTC</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show" id="STAR" role="tabpanel">
              <table class="table">
                <thead>
                  <tr>
                    <th>Pairs</th>
                    <th>Last Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i class="icon ion-md-star"></i> ETH/BTC</td>
                    <td>0.00020255</td>
                    <td class="red">-2.58%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade show active" id="BTC" role="tabpanel">
              <table class="table">
                <thead>
                  <tr>
                    <th>Pairs</th>
                    <th>Last Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i class="icon ion-md-star"></i> ETH/BTC</td>
                    <td>0.00020255</td>
                    <td class="red">-2.58%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> KCS/BTC</td>
                    <td>0.00013192</td>
                    <td class="green">+5.6%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> XRP/BTC</td>
                    <td>0.00002996</td>
                    <td class="red">-1.55%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> VET/BTC</td>
                    <td>0.00000103</td>
                    <td class="green">+1.8%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> EOS/BTC</td>
                    <td>0.00000103</td>
                    <td class="red">-2.05%</td>
                  </tr>
                </tbody>
              </table>
            </div>
      

          </div>
    </div>
</template>