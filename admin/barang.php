<?php
include 'header.php';
?>

<section class="section">
    <div class="card">
        <div class="card-header d-flex justify-content-between">Kelola Barang
            <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add">
                Tambah Barang
            </a>
        </div>
        <div class="card-body">
            <table class="table" id="table1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Deskirpsi Barang</th>
                        <th>Kategori</th>
                        <th>Stok</th>
                        <th>Tindakan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Meja Minimalis</td>
                        <td>Meja minimalis kayu jati Jepara</td>
                        <td>Meja</td>
                        <td>25</td>
                        <td>
                            <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add">
                                Edit
                            </a>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalCenterTitle">
                                        Apakah Anda yakin?
                                    </h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                        Anda tidak akan dapat memulihkan data ini!
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                                        <i class="bx bx-x d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Batal</span>
                                    </button>
                                    <button type="submit" class="btn btn-primary ml-1">
                                        <i class="bx bx-check d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Hapus</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalCenterTitle">
                                        Kelola Barang
                                    </h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="form form-vertical" method="POST"  enctype="multipart/form-data">
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="first-name-vertical">Nama Barang</label>
                                                        <input type="text" class="form-control" name="judul" placeholder="Judul" />
                                                    </div>
                                                </div>
                                                <input type="hidden" name="tgl_terbit" value="<?php echo date('Y-m-d'); ?>" />
                                                <input type="hidden" name="user_id" value="" />
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="isi-vertical">Deskripsi</label>
                                                        <textarea type="text" id="editor" class="form-control" name="isi"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="isi-vertical">Kategori</label>
                                                        <select class="form-control" name="" id="">
                                                            <option value="">Meja</option>
                                                            <option value="">Kursi</option>
                                                            <option value="">Sofa</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>Stok</label>
                                                        <input type="number" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="gambar-vertical">Gambar</label>
                                                        <input type="file" name="gambar" class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 d-flex justify-content-end">
                                                <button type="submit" class="btn btn-primary me-1 mb-1">
                                                    Kirim
                                                </button>
                                                <button type="reset" class="btn btn-light-secondary me-1 mb-1">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>
        </tbody>
        </table>
    </div>

    </div>
</section>

<?php
include 'footer.php';
