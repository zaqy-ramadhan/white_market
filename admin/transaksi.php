<?php
include 'header.php';
?>

<div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Data Transaksi</h3>
                </div>
            </div>
        </div>

        <!-- Basic Tables start -->
        <section class="section">
            <div class="card">
                <div class="card-header">Data Transaksi</div>
                <div class="card-body">
                    <table class="table" id="table1">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama User</th>
                                <th>Nama Barang</th>
                                <th>Tanggal Transaksi</th>
                                <th>Nominal Transaksi</th>
                                <th>Keterangan</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Bawangs</td>
                                    <td>Kursi Jati</td>
                                    <td>18 Januari 2024</td>
                                    <td>Rp500.000</td>
                                    <td>Express</td>
                                    <td>
                                        Sukses
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <!-- Basic Tables end -->
    </div>

<?php
include 'footer.php';